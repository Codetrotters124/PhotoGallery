import React from 'react';
import { throws } from 'assert';
const {ajax} = require('jquery');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {gallery: []}
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: `/${this.props.restName}/images`,
      error: (err) => console.log(`ERROR: method:GET url: /${this.props.restName}/images - ${err}`),
      success: (data) => this.setState({gallery: data})
    });
  }

  render(){
    return(
      <div>
        {console.log(this.state.gallery)}
        <h1>Hello In App</h1>
      </div>);
  }
}

export default App;