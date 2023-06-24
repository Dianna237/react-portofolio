module.exports = {
    HOST: "localhost",
    USER: "feedback_admin",
    PASSWORD: "feedback_admin",
    DB: "feedback_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };