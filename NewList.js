import React from "react";
import axios from "axios";

export default class NewList extends React.Component {
  state = {
    id: 0
  };

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete("https://jsonplaceholder.typicode.com/users/${this.state.id}")
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person ID:
          <input type="number" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    );
  }
}

//import React from "react";
//import Person from "./Person";
//
//function NewList() {
//  const names = ["Mercy", "Shamma", "Enock", "Mercy"];
//  const persons = [
//    {
//      id: 1,
//      name: "Mercy",
//      age: 21,
//      skill: "React"
//    },
//    {
//      id: 2,
//      name: "Shamma",
//      age: 11,
//      skill: "Angular"
//    },
//    {
//      id: 3,
//      name: "Enock",
//      age: 46,
//      skill: "Vue"
//    }
//  ];
//  const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>);
//
//  return <div>{nameList}</div>;
//}
//
//export default NewList;
