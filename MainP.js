import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";

const User = params => {
  return <h1>Welcome {params.username}</h1>;
};

class MainP extends Component {
  state = {
    loggedIn: false
  };
  loggedHandler = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "red" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{ color: "red" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/User" exact activeStyle={{ color: "red" }}>
                User
              </NavLink>
            </li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/user") ? "R u sure?" : true 
            }}
          />
          <input
            type="button"
            value={this.state.loggedIn ? "log out" : "log in"}
            onClick={this.loggedHandler.bind(this)}
          />
          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>Welcome Mercy</h1>;
            }}
          />
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <h1>Its About</h1>;
            }}
          />
          <Route
            path="/user/:username"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default MainP;
