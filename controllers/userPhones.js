


const connect = require('../models/dbMysql');




const createuserphone = (req, res) => {
    try{
        let sql = `INSERT INTO user_phones (user_id , phone) values ('${req?.body?.user_id }', '${req?.body?.phone }');`
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: ' field to set One user_phones'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {
        console.log({e})
        res.status(500).json({status: false, data: 'field to set one user_phones'})
    }
}

const getuserphone = (req, res) => {
    try {
        let sql = "select * from user_phones"
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to get user_phones'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get user_phones'});
    }
}

const getoneuserphone = (req, res) => {
    let sql = `select *from user_phones WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to set One user_phones'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to set one user_phones'});
    }
}

const updateuserphone = (req, res) => {
    try {
        let sql = `UPDATE user_phones SET user_id   = '${req?.body?.user_id  }', phone = '${req?.body?.phone}'WHERE id = ${req?.params?.id}`  
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update user_phones'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update user_phones'});
    }
}

const deleteuserphone = (req, res) => {
    try {
        let sql = `DELETE FROM user_phones WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete user_phones'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete user_phones'});
    }
}


module.exports = {   createuserphone, getuserphone, getoneuserphone, updateuserphone, deleteuserphone};