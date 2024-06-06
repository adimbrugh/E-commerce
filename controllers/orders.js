
const connect = require("../models/dbMysql")


const createorder = (req, res) => {
    try{
        let sql = `INSERT INTO orders (	product_id , user_id) values ('${req?.body?.product_id}', '${req?.body?.user_id}');`
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: ' field to set One orders'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {
        console.log({e})
        res.status(500).json({status: false, data: 'field to set one orders'})
    }
}

const getOrders = (req, res) => {
    // res.status(200).json({status: true, data: "Done Create Orders"})
    try {
        let sql = "select * from orders"
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to get orders'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get orders'});
    }
}

const getoneOrder = (req, res) => {
    // res.status(200).json({status: true, data: "Done Create Orders"})
    let sql = `select *from orders WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to set One order'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to set one order'});
    }
}

const updateOrders = (req, res) => {     
    // res.status(200).json({status: true, data: "Done Update Orders"})
    try {
        let sql = `UPDATE orders SET product_id  = '${req?.body?.product_id}', user_id = '${req?.body?.user_id}'WHERE id = ${req?.params?.id}`  
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update orders'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update orders'});
    }
}

const deleteOrders = (req, res) => {
    // res.status(200).json({status: true, data: "Done Delete Orders"})
    try {
        let sql = `DELETE FROM orders WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete order'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete order'});
    }
}

module.exports = { createorder, getOrders, getoneOrder, updateOrders, deleteOrders};