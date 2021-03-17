const express = require('express')
const http = require('http')
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "d91907l9_sudent",
  database: "d91907l9_sudent",
  password: "AdmInCO@20"
}).promise();
 
// // получение объектов
// connection.query("SELECT * FROM person")
//           .then(result =>{
//             console.log(result);
//           })
//           .catch(err =>{
//             console.log(err);
//           });

const app = express()
   

app.set('view engine', 'ejs')

app.use(express.static(`${__dirname}/views`))
app.use(express.static(`${__dirname}/fonts`))
app.use(express.static(`${__dirname}/IMG`))


  


app.use('/step' , function(request, response){ 
    response.render('index',{
        "IMG" : ["1.jpg"],
        "name" : ["FTG-STUDIO"],
        "link" : ['https://ftg-studio.com/']
    },)
})

app.use('/', function(request, response){
    response.render('../index',{})
})

app.listen(3000)