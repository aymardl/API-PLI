import sequelize from "./instance";
import User from './model/user';
//Migrate the models in the database.
async function migrate() {
    try {
        await sequelize.authenticate();
        // await Order.sync();
        await User.sync();
        // await Category.sync();
        // await Product.sync();
    }   catch (error) {
        console.error(error);
    } finally {
        await sequelize.close();
    }
}

migrate();


async function connect() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established succesfully.')
    }   catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  export default connect;