import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Index extends Component {
  render () {
    return (
      <div>
        <About a={1} render={i=>(
          <Users value={i}></Users>
        )}/>
      </div>
    )
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <div>
          {this.props.render(111)}
        </div>
      </div>
    );
  }
}
class Users extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">go to home</Link>
            </li>
            <li>
              <Link to="/about/">go to about</Link>
            </li>
            <li>
              <Link to="/users/">go to users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;