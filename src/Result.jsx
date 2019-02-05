import React ,{Component} from 'react'
import copy from 'copy-to-clipboard';



class Result extends Component{

    constructor(){
        super();

        this.state ={
            display:false
        }
    }

    
    copyToClipboard(){
        copy(this.props.shortUrl);
        this.setState({
            display:true
        })

        setTimeout(() => {
            this.setState({ display: false });
          }, 3000);
    }

    render(){
        const {originalUrl,urlCode,shortUrl} = this.props;
        const prop = this.state.display ? 'block' : 'none'
        console.log(this.props)
        return(
            <div className="card container">
            <h5 className="card-header">Shorten URL</h5>
            <div className="card-body">
              <p className="card-text"><strong>Original URL :</strong>{originalUrl}</p>
              <p className="card-text"><strong>URL Code :</strong>{urlCode}</p>
              <p className="card-text"><strong>Short URL :</strong>{shortUrl}</p>
              <a  className="btn btn-primary" onClick = {()=>this.copyToClipboard()}>Copy</a>
            </div>

            <div style ={{display : prop}} className="alert alert-primary al" role="alert">
            Url Copied to clipboard
            </div>
          </div>
        )
    }
}

export default Result;