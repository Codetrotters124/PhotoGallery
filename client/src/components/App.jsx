import React from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
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
      <div className='grid'>
        <Header/>
        <Gallery/>
      </div>);
  }
}

export default App;