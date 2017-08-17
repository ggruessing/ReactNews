// var Articles = require("../models/Articles")

// var express = require("express")

// var app = express()

// var routes = {

// app.get("/" , (req,res) => {

// 	console.log("Get")

// 	Articles.find({}, (err,doc) => {

// 		if(err){

// 			console.log(err)
// 		}
// 		else{
// 			res.send(doc)
// 		}
// 	})
// })

// app.post("/" , (req,res) => {

// 	var newArticle = new Articles(req.body)

// 	newArticle.save((err,doc) => {

// 		if (err) {
// 			console.log(err)
// 		}

// 		else{

// 			res.send(doc)
// 		}
// 	})
// })

// app.delete("/" , (req,res) => {

// 	Articles.remove({"_id": req}, (err,doc)=>{

// 		if(err){

// 			console.log(err)
// 		}

// 		else{

// 			res.send(doc)
// 		}
// 	})
// })
// }

// module.exports = routes