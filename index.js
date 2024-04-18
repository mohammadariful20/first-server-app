const exprass=require('express');
const cors = require('cors');
const phones = require('./phones.json');
const app=exprass();
const port=5000;

app.use(cors())
app.get('/',(req,res)=>{
    res.send('Hello World ...............')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const phone=phones.find(p=>p.id===id);
    if(phone){
        res.send(phone)
    }else{
        res.sendStatus(404)
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})