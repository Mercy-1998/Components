import React from "react";
import Axios from "axios";

export default class Person extends React.Component {
  state = {
    persons: []
  };

  // componentDidMount() {
  //   Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  //     console.log(res);
  //     this.setState({
  //        persons: res.data
  //       });
  //   });
  // }

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)

      .then(res => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });
      })
      .catch(error => {
        console.log("Wrong api call");
      });
  }

  deleteUserHandler(person) {
    debugger;
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <div>
            {/* <p key={person.id}>{person.name}</p> */}
            <li>
              {person.address.city}
            </li>
            {/* <button onClick={this.deleteUserHandler.bind(this, person.id)}>delete</button> */}
          </div>
        ))}
      </ul>
    );
  }
}

//import React from "react";
//
//function Person({ person }) {
//  return (
//    <div>
//      <h2>
//        I am {person.name}. I am {person.age} years old. I know {person.skill}.
//      </h2>
//    </div>
//  );
//}
//
//export default Person;
