var express=require('express');
var router= express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://govinda:govinda@ds115396.mlab.com:15396/mytasklist_govinda',['tasks']);

//get all task
router.get('/tasks', function(req,res,next){
   db.tasks.find(function(err,tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
   });

});

//get single task
router.get('/task/:id', function(req,res,next){
    console.log(req.params.id);
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
         if(err){
             res.send(err);
         }
         res.json(task);
    });
 
 });
 

 //save task
 router.post('/task',function(req,res,next){
    var task=req.body;
    if(!task.title || !(task.isDone +'')){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }else{
        db.tasks.save(task,function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
 });
 

 //delete task

 router.delete('/task/:id', function(req,res,next){
    console.log(req.params.id);
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
         if(err){
             res.send(err);
         }
         res.json(task);
    });
 
 });

 //update task

 router.put('/task/:id', function(req,res,next){
    var task=req.body;
    var upTask={};
    if(task.isDone){
        upTask.isDone=task.isDone;

    }

    if(task.title){
        upTask.title=task.title;
    }

    if(!upTask){
        res.status(400);
        res.json({"error":"Bad Data"});

    }else{

        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},upTask,{},function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
 
 });
module.exports=router;