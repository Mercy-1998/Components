import React, {Component} from 'react';
import User from './user';

class Home extends Component{
  constructor(){
    super();
  }

    render(){
        return(
            <div>
              I am in home file
              <User />
            </div>
        )
    }   
}

export default Home;