
 const connect = require('../models/dbMysql');
 const fs = require('fs');



const createproducts = async (req, res) => {
    try{
        let sql;
        if(req?.image) {
            const path = await req.image.save('./public/products')
            const img_path = path.split('./')[1]
            sql = `INSERT INTO products (name, category_id, description, price, featured_image) values ('${req?.body?.name}','${req?.body?.category_id}','${req?.body?.description}', '${req?.body?.price}', '${img_path}')`
        } else {
            sql = `INSERT INTO products (name, category_id, description, price) values ('${req?.body?.name}','${req?.body?.category_id}','${req?.body?.description}', '${req?.body?.price}')`
        }
        connect.query(sql, (err, result) => {
            if(err) return res.status(500).json({status: false, msg: err, data: 'field to create products'})
            res.status(201).json({status: true, data: result})
        })
    } catch (e) {
        console.log({e})    
        res.status(500).json({status: false, data: 'field to create products'})
    }
    
}

const getproducts = (req, res) => {
    try {
        let sql = "select products.id, products.name, products.category_id, products.price, products.description, products.featured_image, products.created, categories.name as category_name from products JOIN categories ON products.category_id = categories.id"
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to get products'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get products'});
    }
    
}

const getoneproducts = (req, res) => {
    let sql = `select * from products WHERE id = ${req?.params?.id}`
    try {
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: ' field to get One category'});
        res.status(200).json({status: true, data: result?.[0]})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to get one category'});
    }
}

const updateProducts = async (req, res) => {
    try {
        let sql;
        if(req?.image) {
            if(req?.body?.featured_image) {
                fs.unlink(`./${req?.body?.featured_image}`, (err) => {
                    if(err) console.log(err) 
                    else {
                        console.log('Image deleted successfully');
                    }
                })
            }
            const path = await req.image.save('./public/products');
            const img_path = path.split('./')[1]
            sql = `UPDATE products SET name = '${req?.body?.name}', price = '${req?.body?.price}' , description = '${req?.body?.description}', category_id = '${req?.body?.category_id}', featured_image = '${img_path}' WHERE id = ${req?.params?.id}`
        } else {
            sql = `UPDATE products SET name = '${req?.body?.name}', price = '${req?.body?.price}' , description = '${req?.body?.description}', category_id = '${req?.body?.category_id}' WHERE id = ${req?.params?.id}`  
        }
        
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to update products'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to update products'});
    }
}

const deleteProducts = (req, res) => {
    try {
        if(req?.body?.featured_image) {
            fs.unlink(`./${req?.body?.featured_image}`, (err) => {
                if(err) console.log(err) 
                else {
                    console.log('Image deleted successfully');
                }
            })
        }
        let sql = `DELETE FROM products WHERE id = ${req?.params?.id}`
    connect.query(sql, function (err, result) {
        if (err) return res.status(500).json({status: false, msg: err, data: 'field to delete products'});
        res.status(200).json({status: true, data: result})

      });
    } catch (e) {
        res.status(500).json({status: false, msg: err, data: 'field to delete products'});
    }
}

module.exports = {createproducts, getproducts, getoneproducts, updateProducts, deleteProducts, }