import React, {Component} from 'react';
import * as httpUtil from './utils/httpUtil';

class Repos extends Component{
  constructor(){
    super();
    this.state  = {
        repos: []
    };
  }
  
  componentDidMount(){
    httpUtil.get('https://api.github.com/users/aanchal-adk/repos').then(response =>{
      console.log(response.data[2].name);
        this.setState({
        repos: response.data
      });
    });
  }

  render(){
    return(
      <div className = "clearfix">
        <h2 className = "title">REPOSITORIES</h2>
        {
          this.state.repos.map(repo => {
            return(
              <div className = "repo-set clearfix" key = {repo.id}>
              <a href ={repo.svn_url} ><h3 className = "repo-name" >{repo.name}</h3>
              {/* <span className = "url-repo">{repo.svn_url}</span>  */}
              </a>
              <span className = "lang">{repo.language}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Repos