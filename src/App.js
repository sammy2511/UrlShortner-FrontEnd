import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import SearchBox from './SearchBox'
import Result from './Result'

class App extends Component {
  constructor(){
    super();

    this.state = {
      url:'',
      originalUrl:null,
      urlCode:null,
      shortUrl:null
    }
  }

    getShortenUrl(){
  
    axios.post('https://url-shortner-microservice.herokuapp.com/api/shorten',{
      url:this.state.url
    })
    .then(response => {
      const { originalUrl,urlCode,shortUrl} = response.data;
      this.setState({
        originalUrl,
        urlCode,
        shortUrl
      })
    })
    
  }

  render() {
    return (
      <div className= "app container">
          <blockquote className="blockquote text-center">
            <h3 className="mb-0">Url Shortner  </h3>
          </blockquote>
          <div className="input-group container jumbotron">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Url Here......"
            value = {this.state.url}
            onChange = {event=>{this.setState({url:event.target.value})}}
            onKeyPress = {event=>{
              if(event.key === 'Enter'){
                this.getShortenUrl()
              }
            }}
            />
              <div className="input-group-append">
                <button type="button" className="btn btn-success" onClick = {()=>this.getShortenUrl()}>Go</button>
              </div>
          </div>
          {
            this.state.shortUrl!==null?
            <Result shortUrl = {this.state.shortUrl}
            urlCode={this.state.urlCode} originalUrl={this.state.originalUrl}/>:
            <div></div>
          }
         
      </div>
      
    );
  }
}

export default App;
