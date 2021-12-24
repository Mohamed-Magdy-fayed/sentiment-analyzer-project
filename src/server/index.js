const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios').default;
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')

dotenv.config()
const key = process.env.API_KEY

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('src/client'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/add', async (req, res) => {
    try {
        const targetURL = req.body.url
        console.log(targetURL);
        const fullURL = `https://api.meaningcloud.com/sentiment-2.1`

        axios.post(fullURL, {
            key: key,
            url: targetURL,
            lang: 'en',
        })
            .then((response) => {
                res.send(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    } catch (e) {
        console.log(e)
    }
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
