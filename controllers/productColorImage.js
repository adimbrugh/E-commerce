

const connect = require('../models/dbMysql');


const createcolorimage = (req, res) => {
    console.log(req.body);
    try{
        let sql = `INSERT INTO product_color_images (product_color_id , image) values (?,?)`
        connect.query(sql,[req.body.product_color_id,req.body.image], function (err, result) {
            if(err) return res.status(500).json({status: false, msg: err, data: ' field to insert One product_color_id'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({status: false, data: 'field to insert one product_color_id'})
    }
}
const getcolorimage = (req, res) => {
        try {
            let sql = "select * from product_color_images"
        connect.query(sql, function (err, result) {
            if (err) return res.status(500).json({status: false, msg: err, data: 'field to get product_color_images'});
            res.status(200).json({status: true, data: result})
    
          });
        } catch (e) {
            console.log(e);
            res.status(500).json({status: false, msg: err, data: 'field to get product_color_images'});
        }
}
const getonecolorimage = (req, res) => {
    console.log(typeof(req?.params?.id));
    try {
        let sql = `select * from product_color_images WHERE id = ${+req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to get One product_colors'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        console.log(e);
        res.status(500).json({status: false, msg: err, data: 'field to get one product_colors'});
    }
}
const updatecolorimage = (req, res) => {
    try {
        let sql = `UPDATE product_color_images SET ? WHERE id = ${req?.params?.id}`
    connect.query(sql,req.body, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update product_colors'});
        res.status(200).json({status: true, msg: "updated"})

      });
    } catch (e) {
        console.log(e);
        res.status(500).json({status: false, msg: err});
    }
}
const deletecolorimage = (req, res) => {
    try {
        let sql = `DELETE FROM product_color_images WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete product_colors'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete product_colors'});
    }
}

module.exports = {createcolorimage, getcolorimage, getonecolorimage, deletecolorimage, updatecolorimage}