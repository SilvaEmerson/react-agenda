const { ContactModel } = require('./db-config')

exports.getAllContacts = async (req, res) => {
  let contacts = await ContactModel.findAll()
  res.json(contacts)
}

exports.addContact = async (req, res) => {
  try {
    await ContactModel.create(req.body)
    res.sendStatus(200)
  } catch (err) {
    console.log(err.message)
    res.sendStatus(500)
  }
}

exports.deleteContact = async (req, res) => {
  let contact = await ContactModel.findOne(req.body)
  try {
    await contact.destroy()
    res.sendStatus(200)
  } catch (error) {
    console.error(error.message)
    res.sendStatus(500)
  }
}

exports.updateContact = async (req, res) => {
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
}
