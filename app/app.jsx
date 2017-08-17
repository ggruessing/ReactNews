import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, browserHistory} from "react-router"
import Main from "./components/Main.jsx"

var routes = require("./config/routes.jsx");

ReactDOM.render(
	routes, 
	document.getElementById("app")
);