const express = require('express')
const path = require('path')
const { ContactModel } = require('./db-config')
const cors = require('cors')

const app = express()

const buildDir = path.join(__dirname, '../agenda-front/build/')

app.use(cors())
app.use('/', express.static(buildDir))
app.use(express.json())

app.route('/contacts')
  .get((req, res) => {
    ContactModel.findAll().then(contacts => {
      res.json(contacts)
    })
  })
  .post((req, res) => {
    ContactModel.create(req.body)
      .then(res.sendStatus(200))
  })

app.listen(3000)
