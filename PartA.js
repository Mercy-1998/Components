import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import emma from "../../src/emma.jpg";
import "./MainP.css";

class PartA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      persons: [],
      errorMsg: ""
    };
  }

  componentDidUpdate() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(Error);
        this.setState({ errorMsg: "Wrong API call !!!" });
      });
  }

  componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(Error);
        this.setState({ errorMsg: "Wrong API call !!!" });
      });
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)

      .then(res => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });
      })
      .catch(error => {
        console.log("Wrong api call");
      });
  }

  render() {
    const { posts, users, errorMsg } = this.state;
    return (
      <Router>
        <div>
          <ul className="Nav-bar">
            <li>
              <NavLink to="/img" exact activeStyle={{ borderColor: "orange" }}>
                <img src={emma} className="image" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={{ color: "orange" }}
                id="option-box"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/titles"
                exact
                activeStyle={{ color: "orange" }}
                id="option-box"
              >
                Titles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                exact
                activeStyle={{ color: "orange" }}
                id="option-box"
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/persons"
                exact
                activeStyle={{ color: "orange" }}
                id="option-box"
              >
                City
              </NavLink>
            </li>
          </ul>
          <div className="content-bar">
            <Route
              path="/img"
              exact
              strict
              render={() => {
                return (
                  <div>
                    <h1>
                      <center>User Details will display here...</center>
                    </h1>
                  </div>
                );
              }}
            />
            <Route
              path="/"
              exact
              strict
              render={() => {
                return (
                  <div>
                    <h1>
                      <center>Welcome !</center>
                    </h1>
                  </div>
                );
              }}
            />
            <Route
              path="/titles"
              exact
              strict
              render={() => {
                return (
                  <div>
                    <ul>
                      <div>
                        {posts.length
                          ? posts.map(post => (
                              <li>
                                <div key={post.id}>{post.title}</div>
                              </li>
                            ))
                          : null}
                      </div>
                    </ul>
                  </div>
                );
              }}
            />
            <Route
              path="/users"
              exact
              strict
              render={() => {
                return (
                  <div>
                    <ul>
                      <div>
                        {users.length
                          ? users.map(user => (
                              <li>
                                <div key={user.id}>{user.name}</div>
                              </li>
                            ))
                          : null}
                      </div>
                    </ul>
                  </div>
                );
              }}
            />
            <Route
              path="/persons"
              exact
              strict
              render={() => {
                return (
                  <div>
                    <ul>
                      {this.state.persons.map(person => (
                        <div>
                          <p>{person.address.city}</p>
                        </div>
                      ))}
                    </ul>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default PartA;
