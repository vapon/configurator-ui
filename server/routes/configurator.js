const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', function(req, res, next) {
    console.log('calling configurator api')
    axios({
            method: 'get',
            url: 'http://localhost:8080/configurator/api/v1/version',
            responseType: 'stream'
        })
        .then(response => {
            response.data.pipe(res);
        })
})

module.exports = router