


const connect = require("../models/dbMysql")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const sql =  `SELECT users.id, users.password, roles.role as user_role FROM users JOIN roles ON users.role_id = roles.id WHERE username = '${req?.body?.username}'`
    connect.query(sql, (err, result) => {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to login user'});
        const user = result[0]
        bcrypt.compare(req?.body?.password, user?.password, (err, resp) => {
            if(resp) {
                // create token
                const SECRET = 'STRONG SECRET STRING';
                const token =  jwt.sign({id: user?.id}, SECRET);
                res.status(200).json({status: true, token, data: {id: user?.id, role: user?.user_role}})
            }
            else res.status(400).json({status: false, msg: 'wrong credentials'})
        })
    })
}

const createUser = async (req, res) => {
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req?.body?.password, salt);
        const sql = `INSERT INTO users (name, username, email, password, address, role_id) values ('${req?.body?.name}', '${req?.body?.username}', '${req?.body?.email}', '${hash}', '${req?.body?.address}', '${req?.body?.role_id}');`
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: 'field to create user'});
            const user_query = `SELECT users.id, roles.role as user_role from users JOIN roles ON users.role_id = roles.id WHERE username = '${req?.body?.username}'`
            connect.query(user_query, async (err, result2) => {
                if(err) return console.log({err});
                const user = result2?.[0]
                const user_id = user?.id
                console.log({user_id, result2})
                if(req?.body?.phones?.length > 0) for (const item of req?.body?.phones) {
                    const sql = `INSERT INTO user_phones (user_id, phone) values ('${user_id}', '${item?.number}')`
                    connect.query(sql, (err, resp) => {
                        if(err) return console.log({err});
                    }) 
                }
                // create token
                const SECRET = 'STRONG SECRET STRING';
                const token =  jwt.sign({id: user_id}, SECRET);
                res.status(201).json({status: true, data: {id: user?.id, role: user?.user_role}, token});
            })  
        })
    } catch (e) {
        console.log({e})
        res.status(500).json({status: false, data: 'field to create user'})
    }
    
}

const getUsers = (req, res) => {        
    try {
        let sql = "select * from users"
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to get users'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get users'});
    }
        
}

const getOneUser = (req, res) =>{
    let sql = `select *from users WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to get one user'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get one user'});
    }
}

const updateUser = (req, res) => {
    try {
        let sql = `UPDATE users SET name = '${req?.body?.name}', username = '${req?.body?.username}', email = '${req?.body?.email}', password = '${req?.body?.password}', address = '${req?.body?.address}' WHERE id = ${req?.params?.id}` 
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update user'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update user'});
    }
}

const deleteUser = (req, res) => {
    try {
        let sql = `DELETE FROM users WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete user'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete user'});
    }
}

module.exports = { getUsers, deleteUser, createUser, updateUser, getOneUser, login }