const express = require('express')
const path = require('path')
const cors = require('cors')
const { getAllContacts, addContact, deleteContact, updateContact } = require('./controller')

const PORT = process.env.PORT || 3000

const app = express()

const buildDir = path.join(__dirname, '../agenda-front/build/')

app.use(cors())
app.use('/', express.static(buildDir))
app.use(express.json())

app.route('/contacts')
  .get(getAllContacts)
  .post(addContact)
  .delete(deleteContact)
  .put(updateContact)

app.listen(PORT)
