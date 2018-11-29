const express = require('express')
const path = require('path')
const { ContactModel } = require('./db-config')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()

const buildDir = path.join(__dirname, '../agenda-front/build/')

app.use(cors())
app.use('/', express.static(buildDir))
app.use(express.json())

app.route('/contacts')
  .get(async (req, res) => {
    let contacts = await ContactModel.findAll()
    res.json(contacts)
  })
  .post(async (req, res) => {
    try {
      await ContactModel.create(req.body)
      res.sendStatus(200)
    } catch (err) {
      console.log(err.message)
      res.sendStatus(500)
    }
  })
  .delete(async (req, res) => {
    let contact = await ContactModel.findOne(req.body)
    try {
      await contact.destroy()
      res.sendStatus(200)
    } catch (error) {
      console.error(error.message)
      res.sendStatus(500)
    }
  })
  .put(async (req, res) => {
    try {
      await ContactModel.update(
        req.body.new,
        {
          where: req.body.old
        }
      )
      res.sendStatus(200)
    } catch (error) {
      console.log(error.message)
      res.sendStatus(500)
    }
  })

app.listen(PORT)
