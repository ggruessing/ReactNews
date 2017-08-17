import React, {Component} from "react"
import Form from "./Form.jsx"
import Results from "./Results.jsx"
var Link = require("react-router").Link

export default class Search extends Component {

	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
		this.getResults = this.getResults.bind(this)
	}	

	render() {
		return (
			<div className="container">
		    <div className="col-lg-12">
		     <div className="panel panel-primary">
		      <div className="panel-heading">
		       <h3 className="panel-title">Search & Results</h3>
		      </div>
		      <div className="panel-body">
		       <p>These there results tho</p>
		       	<Form />
		      	<Results 
		      		articles={this.state.articles}
		      	/>
		      </div>
		     </div>
		    </div>
		  </div>
		)
	}
}

