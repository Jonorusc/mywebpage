const express = require('express'),
    app = express(),
    path = require('path'),
    { readdirSync } = require('fs'),
    dotenv = require('dotenv'),
    mongoose = require('mongoose')

dotenv.config()
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/public'))
app.set('view engine', 'ejs')

// getting routes files .js
readdirSync('./src/routes').map(r => {
    app.use('/', require('./src/routes/' + r))
})

// try to connect to the database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log(' |> The database has been connected'))
    .catch(() => console.log(' |> There was an error trying to connect to the database'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(' |> The app is running on port: ' + PORT))