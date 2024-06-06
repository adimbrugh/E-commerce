
const connect = require('../models/dbMysql');


const createproductcolor = (req, res) => {
    try{
        let sql = `INSERT INTO product_colors (	product_id , color) values ('${req?.body?.product_id}', '${req?.body?.color}');`
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: ' field to insert One product_colors'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {
        console.log({e})
        res.status(500).json({status: false, data: 'field to insert one product_colors'})
    }
}
const getproductcolor = (req, res) => {
        try {
            let sql = "select * from product_colors"
        connect.query(sql, function (err, result) {
            if (err) return res.status(500).json({status: false, msg: err, data: 'field to get product_colors'});
            res.status(200).json({status: true, data: result})
    
          });
        } catch (e) {
            res.status(500).json({status: false, msg: err, data: 'field to get product_colors'});
        }
}
const getoneproductcolor = (req, res) => {
    let sql = `select * from product_colors WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to get One product_colors'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get one product_colors'});
    }
}
const updateproductcolor = (req, res) => {
    try {
        let sql = `UPDATE product_colors SET product_id  = '${req?.body?.product_id }', color = '${req?.body?.color}'WHERE id = ${req?.params?.id}`  
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update product_colors'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update product_colors'});
    }
}
const deleteproductcolor = (req, res) => {
    try {
        let sql = `DELETE FROM product_colors WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete product_colors'});
        res.status(200).json({status: true, data: result})

      });    
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete product_colors'});
    }
}

module.exports = {createproductcolor, getproductcolor, getoneproductcolor, updateproductcolor, deleteproductcolor}