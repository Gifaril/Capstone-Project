const db = require('../../db')
const argon2 = require('argon2');
var validator = require("email-validator");

module.exports = async (req, res)=> {
    const body = req.body
    if (!validator.validate(body.email)){
        res.status(500).send('Email is not valid')
        return
    }
    const hashPassword = await argon2.hash(body.password)
    console.log(hashPassword)
    const query = {
        text: `
        INSERT INTO admins(first_name, last_name, password, email) VALUES($1, $2, $3, $4)
        `,
        values: [body.first_name, body.last_name, hashPassword, body.email],
      }
    try {
        await db.query(query)
        res.status(200).json({
            status: 'success',
            data: body
        })    
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong!')
    }
}