import React, { Component } from "react";
import axios from "axios";
import "./PostList.css";
import API from "./API";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  titleUserHandler = e => {
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
  };

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div style={{ backgroundColor: "#cccc00", height: "5100px" }}>
        <div
          style={{
            textAlign: "center",
            color: "red",
            fontSize: "50px",
            textTransform: "capitalize"
          }}
        >
          <b>List of Titles</b>
        </div>
        <div>
          <div className="title-box" onClick={this.titleUserHandler}>
            Titles
          </div>
        </div>
        <ul>
          <div style={{ fontSize: "25px" }}>
            {posts.length
              ? posts.map(post => (
                  <li>
                    {" "}
                    <div
                      style={{
                        padding: "10px",
                        color: "blue",
                        textTransform: "initial"
                      }}
                      key={post.id}
                    >
                      {post.title}
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

export default PostList;
