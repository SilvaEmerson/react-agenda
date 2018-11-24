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

ContactModel.sync({ force: true })
  .then(res => console.log('Contact model created'))

module.exports = {
  ContactModel: ContactModel
}
