
const connect = require('../models/dbMysql');


    

const createCategory = async (req, res) => {
    try{
        const img  =  await req.image.save("public/categoryImage");
        let sql = `INSERT INTO categories (name, image) values ('${req?.body?.name}', '${img}');`
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: ' field to set One category'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {  
        console.log({e})
        res.status(500).json({status: false, data: 'field to set one category'})
    }
}

const getCategory = (req, res) => {
    try {
        let sql = "select * from categories"
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to get categories'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get categories'});
    }
}

const getoneCategory = (req, res) => {
    let sql = `select *from categories WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to set One category'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to set one category'});
    }
}

const updateCategory = (req, res) => {
    try {
        let sql = `UPDATE categories SET name = '${req?.body?.name}', image = '${req?.body?.image}'WHERE id = ${req?.params?.id}`  
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update category'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update category'});
    }
}

const deleteCategory = (req, res) => {
    try {
        let sql = `DELETE FROM categories WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete category'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete category'});
    }
}


module.exports = {   createCategory, getoneCategory, getCategory, updateCategory, deleteCategory};