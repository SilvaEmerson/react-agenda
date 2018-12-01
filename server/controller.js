const { ContactModel } = require('./db-config')

exports.getAllContacts = async (req, res) => {
  let contacts = await ContactModel.findAll()
  res.json(contacts)
}

exports.addContact = async (req, res) => {
  let { body } = req
  try {
    await ContactModel.create(body)
    res.sendStatus(200)
  } catch (err) {
    console.log(err.message)
    res.sendStatus(500)
  }
}

exports.deleteContact = async (req, res) => {
  let { body } = req
  let contact = await ContactModel.findOne(body)
  try {
    await contact.destroy()
    res.sendStatus(200)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
}

exports.updateContact = async (req, res) => {
  let { body } = req
  try {
    await ContactModel.update(
      body.new,
      {
        where: body.old
      }
    )
    res.sendStatus(200)
  } catch (error) {
    console.log(error.message)
    res.sendStatus(500)
  }
}
