import sequelize from '../instance';
import DataTypes from 'sequelize';

//modele user//
const User = sequelize.define('User', {

    Nom: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Prénom: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Mail: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Telephonenumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Compétences: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    Description: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
 
  });

  export default User;
  