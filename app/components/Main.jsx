import React , {Component} from "react"
import App from "../app.jsx"
import Saved from "./children/Saved.jsx"
import Search from "./children/Search.jsx"

var Link = require("react-router")

export default class Main extends Component{

	constructor(props) {
		super(props)
		this.state = {
			search: "",
			startYear: "",
			endYear: "",
		}
		this.setSearch = this.setSearch.bind(this)
	}
	setSearch(term,start,end){
		this.setState({
			search: term,
			startYear: start,
			endYear: end,
		})
	}

	render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h2><strong>LOLNEWS</strong></h2>
          <p><em>New News</em></p>
          <hr />
          <p>
            <Link to="/search"><button className="btn btn-primary btn-lg">Search New Articles</button></Link>
            <Link to="/saved"><button className="btn btn-success btn-lg">Search Saved Articles</button></Link>
          </p>
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
	}
}

