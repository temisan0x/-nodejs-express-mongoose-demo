require("dotenv").config();
// console.log(process.env)

module.exports = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || "development",
};
