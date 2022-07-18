const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'João Lucas'
    })
})

module.exports = router