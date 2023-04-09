const express = require('express');
const connection =require('../connection');
const connection1 =require('../connection');
const router =express.Router();

router.post('/create',(req,res,next)=>{

    let cameras =req.body;
   
    query =" insert into cameras (name,description,price,url) values(?,?,?,?)";
    connection.query(query,[cameras.name,cameras.description,cameras.price,cameras.url],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"cameras details added successfully"});

        }
        else 
        return res.status(500).json(err);
    })


});
router.get('/read',(req,res,next)=>{
  var  query =" select * from cameras";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);

        }
        else 
        return res.status(500).json(err);
    })


});
router.patch('/update/:id',(req,res,next)=>{
    const id =req.params.id;
  let cameras=req.body;
    var query =" update cameras set name=?,description=?,price=?,url=? where id=?";
    connection.query(query,[cameras.name,cameras.description,cameras.price,cameras.url,id],(err,results)=>{
        if(!err){
            if(results.affectedRows ==0){
               return res.status(404).json({message:"cameras id does not found"});
            }
             
             return res.status(200).json({message:"cameras updated successfully"});
        }
        else 
        return res.status(500).json(err);
    });
    

});
router.delete('/delete/:id',(req,res,next)=>{
    const id =req.params.id;
 
    var query =" delete from cameras where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows ==0){
               return res.status(404).json({message:"cameras id does not found"});
            }
             
             return res.status(200).json({message:"cameras deleted successfully"});
        }
        else 
        return res.status(500).json(err);
    });
    

});



module.exports=router;