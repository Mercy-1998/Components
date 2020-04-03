import React, { Component } from "react";
import "./myStyles.css";
import emma from "../../src/emma.jpg";

export class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <div className="first">
          <img src={emma} />
          <h1 className="box">Check</h1>
          <div className="third">
            <ul>
              <li>
                <i class="fa fa-user-plus icon"></i>Make church admin
              </li>
              <li>
                <i class="fa fa-home icon"></i>Home
              </li>
              <li>
                <i class="fa fa-address-card icon"></i>About
              </li>
              <li>
                <i class="fa fa-id-card icon"></i>Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="second">
          <h1 className="box1">Uncheck</h1>
          <i class="fad fa-abacus"></i>
        </div>
      </div>
    );
  }
}

export default Grid;
