const Sequelize = require('sequelize')

exports.Contact = {
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
