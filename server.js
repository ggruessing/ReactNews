var express = require("express")
var bodyParser = require("body-parser")
var logger = require("morgan")
var mongoose = require("mongoose")
var Articles = require("./models/Articles")
var path = require("path")

const app = express()

const port = process.env.PORT || 3030

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));




var db = process.env.MONGODB_URI || "mongodb://localhost/reactnews"

mongoose.connect(db, function(error) {

  if (error) {
    console.error(error);
  }

  else {
    console.log("mongoose connection is successful");
  }
})

app.listen(port, function(){
	console.log(`Shit's lit on port ${port}`)
})

app.get("/api" , (req,res) => {

	console.log("Get")

	Articles.find({}, (err,doc) => {

		if(err){

			console.log(err)
		}
		else{
			res.send(doc)
		}
	})
})

app.post("/api" , (req,res) => {

	var newArticle = new Articles(req.body)

	newArticle.save((err,doc) => {

		if (err) {
			console.log(err)
		}

		else{

			res.send(doc)
		}
	})
})

app.delete("/api" , (req,res) => {

	Articles.remove({"_id": req}, (err,doc)=>{

		if(err){

			console.log(err)
		}

		else{

			res.send(doc)
		}
	})
})

app.get("/" , function(req,res,next){

	res.sendFile(path.resolve(__dirname, "./public/index.html"))
})
