const express = require('express')
const http = require('http')

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