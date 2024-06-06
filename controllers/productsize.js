


const connect = require('../models/dbMysql');


const createproductsize = (req, res) => {
    try{
        let sql = `INSERT INTO product_sizes (	product_id  , size) values ('${req?.body?.product_id }', '${req?.body?.size}');`
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: ' field to insert One product_sizes'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {
        console.log({e})
        res.status(500).json({status: false, data: 'field to insert one product_sizes'})
    }
}
const getprodeutsize = (req, res) => {
        try {
            let sql = "select * from product_sizes"
        connect.query(sql, function (err, result) {
            if (err) return res.status(500).json({status: false, msg: err, data: 'field to get product_sizes'});
            res.status(200).json({status: true, data: result})
    
          });
        } catch (e) {
            res.status(500).json({status: false, msg: err, data: 'field to get product_colors'});
        }
}
const getoneproductsize = (req, res) => {
    let sql = `select * from product_sizes WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to get One product_sizes'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get one product_sizes'});
    }
}
const updateproductsize = (req, res) => {
    try {
        let sql = `UPDATE product_sizes SET product_id  = '${req?.body?.product_id }', size = '${req?.body?.size}'WHERE id = ${req?.params?.id}`  
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update product_sizes'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update product_sizes'});
    }
}
const deleteproductsize = (req, res) => {
    try {
        let sql = `DELETE FROM product_sizes WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete product_sizes'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete product_sizes'});
    }
}

module.exports = {createproductsize, getprodeutsize, getoneproductsize, updateproductsize, deleteproductsize}