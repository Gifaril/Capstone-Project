const generateAccessToken = require('../../jwt/GenerateAccessToken')
const db = require('../../db')
const argon2 = require('argon2');

module.exports = async (req, res)=> {
    const body = req.body
    const type = body.type === 'admin' ? 'admins' : 'students'
    console.log(type)
    const query = {
        text: `
        SELECT * FROM ${type}
        WHERE email = $1
        `,
        values: [body.email]
      }
    try {
        const response = await db.query(query)
        const data = response.rows[0]

        if (!data){
          return  res.status(500).send('Invalid credentials!')
        }
        if (await argon2.verify(data.password, body.password) === false){
            return  res.status(500).send('Invalid credentials!')
        }
        res.status(200).json({
            status: 'success',
            data,
            token: generateAccessToken({id:data.id})
        })  
    } catch (error) {
        console.error(error)
    }
}