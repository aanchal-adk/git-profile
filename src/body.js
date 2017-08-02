import React, {Component} from 'react'
import Repos from './repos'
import  UserInfo from './UserInfo'

class BodyWrapper extends Component{
  render(){
    return(
    <div className = "body-wrapper clearfix">
      <div className = "body-left"><UserInfo/></div>
      <div className = "body-right"><Repos/></div>
    </div>
    )
  }  
}

export default BodyWrapper