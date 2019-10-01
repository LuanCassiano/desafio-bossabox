const dotenv = require('dotenv')

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

// console.log(process.env.NODE_ENV)
// console.log(process.env.DB_URL)