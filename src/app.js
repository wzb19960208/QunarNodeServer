const express = require('express');
const app = express();
const path = require('path');


// 访问根目录，直接让它去访问dist文件夹，之后的事情就交给angular的路由来处理了
app.use('/',express.static(path.join(__dirname,'..','dist')));

// app.get('/',(req,res)=>{
//     res.send('hello');
// });

const server = app.listen(80);