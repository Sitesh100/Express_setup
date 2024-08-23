const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.Port,
    email: process.env.email
}