const express = require('express')
var validator = require("email-validator");
const db = require('./db')
const argon2 = require('argon2');
const cors = require('cors');
const addAdmin = require('./ctrl/admin/CreateAdmin')
const authenticateToken = require('./jwt/AuthenticateToken')
const login = require('./ctrl/auth/Login')
const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: 'AKIATBIOLDO7GKUTHIHT',
    secretAccessKey: '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'
})

const server = async ()=> {
    const app = express()
    app.use(cors({
        origin: '*'
    }));
    const port = 8080

    app.use(express.json())

    app.post('/api/admin/create', addAdmin)

    app.post('/api/login', login)

    app.get('/api/admins', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            SELECT * FROM admins
            `,
          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.get('/api/admin', authenticateToken, async (req, res)=> {
        console.log(req.id)
        const query = {
            text: `
            SELECT * FROM admins
            WHERE id = $1
            `,
            values: [req.id]
          }
        try {
            const response = await db.query(query)
            if (!response.rows[0]){
                res.status(404).json({
                    status: 'failed',
                    message: 'user not found'
                })
                return
            }
            res.status(200).json({
                status: 'success',
                data: response.rows[0]
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.get('/api/batch', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            SELECT * FROM batch
            `,
          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.post('/api/batch', authenticateToken, async (req, res)=> {
        const body = req.body
        const query = {
            text: `
            INSERT INTO batch(batch_name, batch_date) VALUES($1, $2)
            `,
            values: [body.batch_name, body.batch_date],
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
    })

    app.get('/api/students', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            SELECT * FROM students
            `,
          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.get('/api/student', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            SELECT * FROM students
            WHERE student_id = $1
            `,
            values: [req.id]
          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows[0]
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.post('/api/students', async (req, res)=> {
        const body = req.body
        if (!validator.validate(body.email)){
            res.status(500).send('Email is not valid')
            return
        }
        const hashPassword = await argon2.hash(body.password)
        const query = {
            text: `
            INSERT INTO students(first_name, last_name, password, email, age, birthdate, created_on) VALUES($1, $2, $3, $4, $5, $6, $7)
            `,
            values: [body.first_name, body.last_name, hashPassword, body.email, body.age, body.birthdate, new Date()],
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
    })

    app.put('/api/student/:studend_id', authenticateToken, async (req, res)=> {
        const body = req.body
        if (!validator.validate(body.email)){
            res.status(500).send('Email is not valid')
            return
        }
        const query = {
            text: `
            INSERT INTO students(first_name, last_name, password, email, age, birthdate, batch_id, created_on) VALUES($1, $2, $3, $4, $5, $6)
            `,
            values: [body.first_name, body.last_name, body.email, body.age, body.birthdate, body.batch_id],
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
    })

    app.put('/api/student/:student_id/add_batch', authenticateToken, async (req, res)=> {
        const body = req.body
        const studend_id = req.params.student_id
        const query = {
            text: `
            UPDATE students
            SET batch_id = $2
            WHERE student_id=$1
            `,
            values: [studend_id, body.batch_id],
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
    })

    app.post('/api/announcement', authenticateToken, async (req, res)=> {
        const body = req.body
        const query = {
            text: `
            INSERT INTO announcements(title, admin_id) VALUES($1, $2)
            `,
            values: [body.title, req.id],
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
    })

    app.get('/api/announcement', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            SELECT * FROM announcements
            `,
          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.put('/api/announcement/:announcement_id', authenticateToken, async (req, res)=> {
        const body = req.body
        const announcementId = req.params.announcement_id
        const query = {
            text: `
            UPDATE announcements
            SET title = $1
            WHERE announcement_id=$2
            `,
            values: [body.title, announcementId],
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
    })

    app.delete('/api/announcement/:announcement_id', authenticateToken, async (req, res)=> {
        const body = req.body
        const announcementId = req.params.announcement_id
        const query = {
            text: `
            DELETE FROM announcements
            WHERE announcement_id=$1
            `,
            values: [ announcementId],
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
    })

    app.post('/api/file', authenticateToken, async (req, res)=> {
        const body = req.body
        const query = {
            text: `
            INSERT INTO files(file_name) VALUES($1)
            `,
            values: [body.file_name],
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
    })

    app.get('/api/files', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            SELECT * FROM files
            `,
          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows
            })  
        } catch (error) {
            console.error(error)
        }
    })

    app.delete('/api/file/:file_id', authenticateToken, async (req, res)=> {
        console.log(req)
        const query = {
            text: `
            DELETE FROM files
            WHERE file_id=$1
            `,
            values: [ req.params.file_id],

          }
        try {
            const response = await db.query(query)
            res.status(200).json({
                status: 'success',
                data: response.rows
            })  
        } catch (error) {
            console.error(error)
        }
    })


    
      app.get('/api/file/:file_id/download', authenticateToken, async (req, res)=> {
        console.log(req.params.file_id)
        const query = {
            text: `
            SELECT * FROM files
            WHERE file_id = $1
            `,
            values: [req.params.file_id],
          }
        try {

            const s3 = new AWS.S3({
                region: 'ap-southeast-1',
            })
            const response = await db.query(query)
            console.log(response)
            const rep = await s3.getSignedUrlPromise('getObject',{
                Bucket: 'capstone-upload',
                Key: response.rows[0].file_name,
                Expires: 1000,
              })
            res.status(200).json({
                status: 'success',
                data: rep
            })  
        } catch (error) {
            console.error(error)
        }
    })

    
    app.listen(port, ()=> {
        console.log('listening on port:', port)
    })   
}

server()