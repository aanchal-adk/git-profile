import React , {Component} from 'react'
import './App.css'
import UserInfo from './UserInfo'

class Header extends Component{
  render(){
    return(
      <div className="App-header clearfix">
          <div className = "top-header clearfix"><h3>Git Profile</h3></div>
        </div>
    )
  }

}

export default Header;