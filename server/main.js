const express = require('express')
const path = require('path')
const { ContactModel } = require('./db-config')
const cors = require('cors')

const app = express()

const buildDir = path.join(__dirname, '../agenda-front/build/')

app.use(cors())

app.use('/', express.static(buildDir))

app.get('/contacts', (req, res) => {
  ContactModel.findAll().then(contacts => {
    let payload = JSON.stringify(contacts)
    console.log(payload)
    res.send(payload)
  })
})

app.post('/contacts', (req, res) => {
  console.log(req.body)
  // ContactModel.create(req.body)
})

app.listen(3000)
