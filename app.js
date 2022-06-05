const express=require('express')
const bodyparser=require('body-parser');
const app=express()
const db = require("./models/index");
const { Video } = require('./models/index');
const getVideo=require('./server/controller/videoController')
const getfiles=require('./server/routes/route')

app.use(bodyparser.urlencoded({extended:true}))

//connection()
db.sequelize.sync()
// db.sequelize.sync({force:true})

app.use('/video',getfiles)

app.listen(3000,()=>{
    console.log('listening on PORT 3000');
})