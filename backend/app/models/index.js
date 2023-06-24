const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const FeedBack = require("./FeedBack.model.js")(sequelize, Sequelize);
sequelize
.sync()
.then(() =>{
  console.log("Database is connected and table is created!");
})
.catch((err) =>{
  console.error("Unable to connect to the database:", err);
})

db.feedback_msg = FeedBack;
module.exports = db;