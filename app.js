const express = require('express'),
    app = express(),
    { readdirSync } = require('fs'),
    dotenv = require('dotenv'),
    mongoose = require('mongoose')

dotenv.config()
app.use(express.json())


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
.then(() => console.log(' |> The database has been connected'))
.catch(() => { console.log(' |> There was an error trying to connect to the database')})


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('|> The app is running on port: ' + PORT)
})