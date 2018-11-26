const Sequelize = require('sequelize')

const Contact = {
  name: {
    primaryKey: true,
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false
  }
}

module.exports = {
  Contact: Contact
}
