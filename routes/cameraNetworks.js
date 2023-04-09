const express = require('express');
const connection =require('../connection');
const router =express.Router();
router.post('/create',(req,res,next)=>{

    
    let cameraNetworks=req.body;
    query =" insert into cameranetworks (cn_id,id,name,descriptions,price,url,type,cameras) values(?,?,?,?,?,?,?,?)";
    connection.query(query,[cameraNetworks.cn_id,cameraNetworks.id,cameraNetworks.name,cameraNetworks.descriptions,cameraNetworks.price,cameraNetworks.url,cameraNetworks.type,cameraNetworks.cameras],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"cameraNetworks details added successfully"});

        }
        else 
        return res.status(500).json(err);
    });
    

});
router.get('/read',(req,res,next)=>{
    var  query =" select * from cameranetworks";
      connection.query(query,(err,results)=>{
          if(!err){
              return res.status(200).json(results);
  
          }
          else 
          return res.status(500).json(err);
      });
    });
   
    router.patch('/update/:id',(req,res,next)=>{
        const id =req.params.id;
      let cameraNetworks=req.body;
        var query =" update cameranetworks where cn_id=?,id=?,name=?,descriptions=?,price=?,url=?,type=?,cameras=? where id=?)";
        connection.query(query,[cameraNetworks.cn_id,cameraNetworks.id,cameraNetworks.name,cameraNetworks.descriptions,cameraNetworks.price,cameraNetworks.url,cameraNetworks.type,cameraNetworks.cameras,id],(err,results)=>{
            if(!err){
                if(results.affectedRows ==0){
                   return res.status(404).json({message:"cameraNetwork id does not found"});
                }
                 
                 return res.status(200).json({message:"cameraNetwork updated successfully"});
            }
            else 
            return res.status(500).json(err);
        });
        
    
    });
    router.delete('/delete/:id',(req,res,next)=>{
        const id =req.params.id;
     
        var query =" delete from cameranetworks where id=?";
        connection.query(query,[id],(err,results)=>{
            if(!err){
                if(results.affectedRows ==0){
                   return res.status(404).json({message:"cameraNetworks id does not found"});
                }
                 
                 return res.status(200).json({message:"cameraNetworks deleted successfully"});
            }
            else 
            return res.status(500).json(err);
        });
        
    
    });
    
module.exports=router;