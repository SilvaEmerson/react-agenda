const Sequelize = require('sequelize')

const Contact = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}

module.exports = {
  Contact: Contact
}
