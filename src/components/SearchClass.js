import { Component } from "react";

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    onclick() {
        console.log('onclick clicked')
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(<div style={{width:'100%', height:'40px', backgroundColor:'gray'}} onClick={() => this.onclick( )}>
            <h1>This is search class</h1>
            <h3>{this.state.count}</h3>
        </div>)
    }
}
export default Search;