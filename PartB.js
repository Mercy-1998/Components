import React, { Component } from "react";
import axios from "axios";

class PartB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  componentDidMount() {
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

  render() {
    const { posts, errorMsg } = this.state;

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
            {errorMsg ? <div className="glow">{errorMsg}</div> : null}
          </div>
        </ul>
      </div>
    );
  }
}

export default PartB;
