var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var browserHistory = Router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = Router.IndexRoute;

// Reference the high-level components
import Form from "../components/children/Form.jsx"
import Results from "../components/children/Results.jsx"
import Saved from "../components/children/Saved.jsx"
import Search from "../components/children/Search.jsx"
import helper from "../components/utils/Helpers.js"
import Main  from "../components/Main.jsx"

module.exports = (

  <Router history={browserHistory}>

    <Route path="/" component={Main}>

      <Route path="search" component={Search} />
      <Route path="saved" component={Saved} />

      <IndexRoute component={Saved} />   

      </Route>
  </Router>

)