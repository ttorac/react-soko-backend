require("dotenv").config()

module.exports = {
    'app_host': process.env.APP_HOST,
    'app_port': process.env.APP_PORT,
    'db_host': process.env.DB_HOST
}