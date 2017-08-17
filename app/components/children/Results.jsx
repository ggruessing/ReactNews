import React, {Component} from "react"
var Link = require("react-router")

export default class Results extends Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
		}
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
			      <p>Resulteration</p>
				    <div>
					    {this.props.articles.map((article, i) => (
					    	<div className="panel panel-default">
					  			<div className="panel-heading">
					    			<h3 className="panel-title">{article.title}</h3>
					  			</div>
					  			<div className="panel-body">
					        		<p>{article.body}</p>
					        </div>
					      </div>
					    ))}
				    </div>
		      </div>
		     </div>
		    </div>
		  </div>
		  )
		}
	}

