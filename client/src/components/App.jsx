import React from 'react';
const {ajax} = require('jquery');

class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: `/:${this.props.restName}/images`,
      error: (err) => console.log('ERROR: method:GET url:'),
      success: (data) => console.log('Success')
    });
  }

  render(){
    return(
      <div>
        {console.log(this.props)}
        <h1>Hello In App</h1>
      </div>);
  }
}

export default App;