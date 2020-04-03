
import React, { Component } from 'react'

class Welcome extends Component {

    constructor(){
        super();
        this.state = {value: ''};
      //  this.onChange = this.onChange.bind(this)
     }
     
     onChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({value: e.target.value})
        }
     }

    render() {

        return (
            <div>
                <input value={this.state.value} onChange={this.onChange}/>
            </div>
        )
}
}

export default Welcome


//import React, { Component } from 'react'
//
//class Welcome extends Component {
//    render () {
//        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
//    }
//}
//
//export default Welcome
