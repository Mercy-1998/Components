
import React from 'react'

const UserGreetings = props => {
    console.log(props)
    return (
        <div>
            <h1>Hiii {props.name} a.k.a {props.heroName} </h1>
            {props.children}
            <input type="text"/>
        </div>
    ) 
}

    //return React.createElement('div', {id: 'hello', className: 'dummy'} , React.createElement('h1',null,'Hii Glory'))

    //return React.createElement('div', null, React.createElement('h1',null,'Hii Glory'))

//    return(
//        <div>
//            <h1>Glory</h1>
//        </div>
//    )


export default UserGreetings

//import React, { Component } from 'react'
//
//class UserGreetings extends Component {
//    render () {
//        return <h1>Hiiii Class</h1>
//    }
//}
//
//export default UserGreetings

//import React from 'react'
//
//export const UserGreetings = () => <h1>Mercy :)</h1>

//function UserGreetings() {
//    return <h1>Mercy</h1>
//}

//export default UserGreetings







//
//
//import React, { Component } from 'react'
//
//class UserGreetings extends Component {
//    constructor(props) {
//        super(props)
//
//        this.state = {
//            isLoggedIn : true
//        }
//    }
//
//    render() {
//            
//            return this.state.isLoggedIn && <div>Welcome Mercy</div>
//
//            //return(
//                //this.state.isLoggedIn ?
//                //<div>Welcome Mercy :)</div> : 
//                //<div>Welcome Guest</div>
//            //)
//
////            let message
////            if(this.state.isLoggedIn){
////                message= <div>Welcome Mercy</div>
////            } else {
////                message = <div>Welcome Guest</div>
////            }
////
////            return <div>{message}</div>
//
////        if(this.state.isLoggedIn){
////            return(
////                <div>Welcome Mercy :) !!!</div>
////            )
////        } else{
////            return(
////                <div>Welcome Guest</div>
////            )
////        }
//    //    return (
//    //      <div>
//    //            <div>Welcome Mercy :) !!!</div>
//    //            <div>Welcome Guest</div>
//    //        </div>
//    //    )
//    }
//}
//
//export default UserGreetings