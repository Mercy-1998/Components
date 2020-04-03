import React, { Component, Fragment } from "react";
import "./pricing.css";
import plus from "../../src/logochurch.png";
import cvv from "../../src/cvv.svg";
import safe from "../../src/safe.png";
import Testing from "./Testing";

export default class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  };

  //  handleCCInputChange(e) {
  //    const { name, value } = e.target;
  //    this.setState({ [name]: value });
  //  }

  //        addHyphen = (element) => {
  //            let ele = document.getElementById(element.id);
  //            ele = ele.value.split(' ').join('');    // Remove dash (-) if mistakenly entered.
  //
  //            let finalVal = ele.match(/.{1,4}/g).join(' ');
  //            document.getElementById(element.id).value = finalVal;
  //        }
  //        slash = (element) => {
  //    	let ele = document.getElementById(element.id);
  //        ele = ele.value.split('/').join('');    // Remove dash (-) if mistakenly entered.
  //
  //        let finalVal = ele.match(/.{1,2}/g).join('/');
  //        document.getElementById(element.id).value = finalVal;
  //        }

  render() {
    return (
      <Fragment>
        <div className="overall-box">
          <header>
            <nav>
              <div className="row">
                <img src={plus} id="logo" />
                <b>
                  <p id="heading">CHURCHTALK</p>
                </b>
              </div>
            </nav>
          </header>
          <div className="center-box">
            <b>
              <div id="content">
                try our Free plan and Power up your church management
              </div>
            </b>
          </div>
          <div>
            <div className="card-box">
              <div className="enter">
                <p>Please enter your payment details</p>
                <div id="card">
                  <div id="dummy">
                    <div>
                      <input
                        type="text"
                        id="CN"
                        placeholder="Card number"
                        maxLength="40"
                        value={this.state.value}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="dummy">
                       <input
                        type="text"
                        id="ED"
                        placeholder="Expiry date (MM/YY)"
                        maxLength="5"
                      />
 
                       <input
                         type="text"
                         id="CVV"
                         placeholder="CVV"
                         maxLength="3"
                         name="cvv"
                       />

                      <img src={cvv} id="cvvimg" />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="NOC"
                        placeholder="Name on card"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subs">
                <p>Subscription summary</p>
                <div>
                  <Testing />
                </div>
              </div>
              <div>
                <img src={safe} id="safe" />
              </div>
              <div id="back-box">
                <button id="bbtn" onclick="#">
                  <b>Back</b>
                </button>
                <button id="sbtn" onclick="#">
                  <b>Subscribe & Checkout</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
