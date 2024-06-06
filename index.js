const express = require('express');
const cors = require('cors');
const connect = require("./models/dbMysql")

const users_routes = require('./routes/users');
const products_routes = require('./routes/products');
const cetegorys_routes =  require('./routes/cotegory');
const orders_routes = require('./routes/orders')
const product_colors_routes = require('./routes/productColor');
const product_color_image_routes = require('./routes/productColorImage')
const product_size_routes = require('./routes/productSize')
const user_phones_routes = require('./routes/userPhones')
const fileEasyUpload = require('express-easy-fileuploader') // File Upload




const app = express();
app.use(express.json())
app.use(fileEasyUpload({app, fileUploadOptions: {}}));  // File Upload


const port = 9900 ;

app.use(cors());
app.use('/public', express.static("public"))
app.use('/users', users_routes);
app.use('/products', products_routes);
app.use('/category', cetegorys_routes);
app.use('/orders', orders_routes);
app.use('/productColor', product_colors_routes);
app.use('/productColorImage', product_color_image_routes);
app.use('/productsize', product_size_routes); 
app.use('/userPhones', user_phones_routes); 

app.listen(port, () => {
    console.log('app is running at port ' + port);
})