const Sequelize = require('sequelize')
const { Contact } = require('./model')

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: './db.sqlite'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const ContactModel = sequelize.define('Contact', Contact)

const main = async () => {
  await ContactModel.sync({ force: true })
    .then(res => console.log('Contact model created'))

  await ContactModel.create({
    name: 'Emerson',
    number: 232342321
  })

  await ContactModel.findAll().then(contacts => contacts.map(el => console.log(el.name)))
}

main()

module.exports = {
  ContactModel: ContactModel
}
