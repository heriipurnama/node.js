/**
 * Created by heriipurnama on 03/10/15.
 */
var cl = require('cli-color');
var database = "127.0.0.1/mongoose";
var coll     = ['mongoose'];
var mongo   = require('mongojs');
var db      = mongo(database, coll);
db.mongoose.find(function (err, docs){
   console.log(cl.green('iki haha'))
    console.log(docs);
});
