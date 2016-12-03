//require
var express = require('express');
var path = require('path');
var db = require('./db.js')
var ObjectId = require('mongodb').ObjectID;

// create router
var router = express.Router();

// export router
module.exports = router;


// route for home
router.get('/', function(req,res){
    res.render('pages/home')
})

// route for about
router.get('/users', function(req,res){
    var collection = db.get().collection('users');
    
    collection.find().toArray(function(err,result){
         res.render('pages/users',{users:result})
    });
  
})

// contact
router.get('/create', function(req,res){
    res.render('pages/create')
})

router.post('/create', function(req,res){
    var collection = db.get().collection('users');
    // request data
    collection.save(req.body, function(err,result){
        if(err){
            return console.log(err);
        }
        console.log('data saved succesfully');
        // render contact page again
        res.render('pages/create')
        // end response
        res.end();
  });

});


router.delete('/users', function(req,res){
        var collection = db.get().collection('users');
        collection.findOneAndDelete({"_id": ObjectId(req.body.id)},function(err,result){
            if (err){
                return res.send(500,err)
            }
                res.send('username - ' + result.value.name + ' has been removed')
        })

  });