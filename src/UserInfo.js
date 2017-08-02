import React , {Component} from 'react';
// import './index.css';
import * as httpUtil from './utils/httpUtil'


class UserInfo extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      src: '',
      login: '',
      address: '',
      email: 'abc@example.com',
      followersNo: 0,
      followingNo: 0,
      url: '',
      bio: ''
    }
  }
  componentDidMount(){
    httpUtil.get('https://api.github.com/users/aanchal-adk').then(response =>{
      this.setState({
        name:response.data.name,
        src: response.data.avatar_url,
        login: response.data.login,
        address: response.data.location,
        followersNo: response.data.followers,
        followingNo: response.data.following,
        url: response.data.html_url,
        bio: response.data.bio
      });
      if(response.data.email != null){
        this.setState({
          email:response.data.email
        });
      }
    });
  }
  
  render(){
    return(
      <div className = "user-info clearfix">
        <a href = {this.state.url}><img className = "profile" src = {this.state.src}/></a>
        <h2>{this.state.name}</h2>
        <span className = "login-name">[{this.state.login}]</span>
        <div className = "extra-info clearfix">
          <span><h4>Address</h4>
          {this.state.address}</span>
          <span><h4>Email</h4>
          {this.state.email}</span>
          <span><strong>followers: </strong>{this.state.followersNo}</span>
          <span><strong>following: </strong>{this.state.followingNo}</span>
        </div>
         
      </div>
    )
  }
}
 
export default UserInfo;
