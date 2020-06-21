const path=require('path')
const express=require('express')
const weat=require('./forecast')
const hbs=require('hbs')

const app=express()
//Define paths for express configuration i.e public for css,js,html files
//and templates for dynamic pages
const viewpath=path.join(__dirname,'../templates/views')
const publicDir=path.join(__dirname,'../public')
const partials=path.join(__dirname,'../templates/partials')

//Setup handlebars and views location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partials)

//Setup static directory to use 
app.use(express.static(publicDir))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Parth'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Us!',
        name:'Parth Bapat'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'I am helping',
        name:'Why do you want help'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
       error:"please enter address"
        })
    }
    console.log(req.query.address)
    weat(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        else{
           return res.send({
                forecast:data,
                address:req.query.address
            })
        }
    })
})

app.get('*',(req,res)=>{
    res.render('error')
})

app.listen(3000,()=>{
    console.log('Server up')
})