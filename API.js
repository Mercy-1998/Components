import React, { Component } from "react";
import axios from "axios";

class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      errorMsg: ""
    };
  }

  userUserHandler = e => {
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
  };

  render() {
    const { users, errorMsg } = this.state;
    return (
      <div
        style={{
          marginTop: "35px",
          backgroundColor: "brown"
        }}
      >
        <div>
          <div className="user-box" onClick={this.userUserHandler}>
            Users
          </div>
        </div>
        <ul>
          <div style={{ fontSize: "25px" }}>
            {users.length
              ? users.map(user => (
                  <li>
                    {" "}
                    <div
                      style={{
                        padding: "10px",
                        color: "blue",
                        textTransform: "initial"
                      }}
                      key={user.id}
                    >
                      {user.name}
                    </div>{" "}
                  </li>
                ))
              : null}
            {errorMsg ? <div className="glow">{errorMsg}</div> : null}
          </div>
        </ul>
      </div>
    );
  }
}

export default API;

//import React, { Component } from "react";
//import axios from "axios";
//
//class API extends Component {
//  constructor(props) {
//    super(props);
//
//    this.state = {
//      posts: []
//    };
//  }
//
//  fetchUserHandler = e => {
//    axios
//      .get("https://jsonplaceholder.typicode.com/posts")
//      .then(response => {
//        console.log(response);
//        this.setState({ posts: response.data });
//      })
//      .catch(error => {
//        console.log(Error);
//        this.setState({ errorMsg: "Wrong API call !!!" });
//      });
//  };
//
//  render() {
//    const { posts } = this.state;
//    return (
//      <div>
//        <button onClick={this.fetchUserHandler}>Fetch titles</button>
//        <div>
//          {posts.length
//            ? posts.map(post => (
//                <li>
//                  <div key={post.id}>{post.title}</div>
//                </li>
//              ))
//            : null}
//        </div>
//      </div>
//    );
//  }
//}
//
//export default API;
