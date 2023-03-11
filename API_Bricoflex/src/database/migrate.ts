import sequelize from "./instance";
import User from "./model/user";


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }

  async function migrate(User: any) {
    console.log("ff");
    await User.sync({ alter: true }).then(() => {
      console.log("The table for the User model was just (re)created!");
    }).catch((error: any) => {
      console.error("ceci est une erreur", error);
    })}

    sequelize.query('INSERT INTO Test (name) VALUES ("thisisatest")');
    migrate(User);
