/**
 * Created by heriipurnama on 03/10/15.
 */
//var mongoose = require('mongoose');
var cli      = require('cli-color');

//buat file koneksi
var MongoClient  = require('mongoose').MongoClient;
//var db         = mongoose.connect('mongodb://127.0.0.1:27017/mongoose');
var dbHost       = 'mongodb://localhost:27017/mongoose';
var myCollection = "mongoose";

MongoClient.connect(dbHost, function(err, db){
    if (err) throw err;
    db.collection(myCollection).find({},{},{}).toArray(
        function(err, docs){
            for(index in docs){
                console.log(docs[index]);
            }
        }
    );
});