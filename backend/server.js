const express=require("express");
const app =express();

const data=require("./data/data")


app.listen(5000,console.log("app started at port 5000"))


app.get('/',(req,res)=>{
    
    res.send("Api is runing");
})
app.get('/data',(req,res)=>{
    
    res.json(data);
})
app.get('/data/:id',(req,resp)=>{
    let datas;
    data.forEach((n)=>{
        if(n.id==req.params.id){
            datas=n;
            return;
        }
    })
    resp.send(datas);
})
