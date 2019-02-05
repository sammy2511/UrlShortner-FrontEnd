import React ,{Component} from 'react'


class SearchBox extends Component{
    render(){
        return(
            <div class="input-group container jumbotron">
            <input type="text" class="form-control" placeholder="Enter Url Here......"/>
            <div class="input-group-append">
            <button type="button" class="btn btn-success">Go</button>
            </div>
            </div>
        )
    }
}

export default SearchBox;