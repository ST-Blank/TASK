
const { Sequelize} = require('sequelize');


    const sequelize = new Sequelize( {
      username: "root",
        password: "password",
        database: "avobase",
        host: "localhost",
        dialect: "mysql"
    });
    const connection=async()=>{
       try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    } 
    }
      connection()
    module.exports=sequelize