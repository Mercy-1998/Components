import React, { Component, Fragment } from 'react';
import './Testing.css';

class Testing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn : false
    }
  }

  render() {
    return this.state.isLoggedIn ?
    <Fragment>
      <div className="little-box">
        <div id="rtext">Free Plan</div> 
        <div id="wtext">$00.00</div>
      </div>
      <div className="fee-box">
        <div id="left">Subscription Fee</div>
        <div id="right">$ 0</div>
      </div>
      <div className="pay-box">
          <div id="PA">Payable amount</div>
          <div id="dollar">
            <div id="doll">$</div>
            <div id="zero">0</div>
          </div>
      </div>
    </Fragment> :
      <Fragment>
        <div className="little-box2">
          <div id="rtext">Premium Plan(Yearly)</div> 
          <div id="wtext">$900 Billed Annually</div>
        </div>
        <div className="reff">
          <input type="text" placeholder="Enter refferal code"></input>
          <button id="abtn">Apply</button>
        </div>
        <div className="fee-box2">
          <div id="left2">Subscription Fee</div>
          <div id="right">$ 900</div>
        </div>
        <div className="Tax-box">
          <div id="left3">Tax</div>
          <div id="right3">$10</div>
        </div>
        <div className="pay-box2">
          <div id="PA">Payable amount</div>
          <div id="dollar">
            <div id="doll">$</div>
            <div id="zero2"><b>910</b></div>
          </div>
      </div>
      </Fragment>
  }
}

export default Testing





//import React from 'react';
//import Cards from 'react-credit-cards';
//import 'react-credit-cards/es/styles-compiled.css';
//
//
// 
//export default class Testing extends React.Component {
//  state = {
//    cvc: '',
//    expiry: '',
//    focus: '',
//    name: '',
//    number: '',
//  };
// 
//  handleInputFocus = (e) => {
//    this.setState({ focus: e.target.name });
//  }
//  
//  handleInputChange = (e) => {
//    const { name, value } = e.target;
//    
//    this.setState({ [name]: value });
//  }
//  
//  render() {
//    return (
//      <div id="PaymentForm">
//        <Cards
//          cvc={this.state.cvc}
//          expiry={this.state.expiry}
//          focus={this.state.focus}
//          name={this.state.name}
//          number={this.state.number}
//        />
//        <form>
//        	<input
//            type="tel"
//            name="number"
//            placeholder="Card Number"
//            onChange={this.handleInputChange}
//            onFocus={this.handleInputFocus}
//          />
//          ...
//        </form>
//      </div>
//    );
//  }
//}