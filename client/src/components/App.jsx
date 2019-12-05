import React from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import { throws } from 'assert';
const {ajax} = require('jquery');


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {gallery: [], id: ''}
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: `/${this.props.restName}/images`,
      error: (err) => console.log(`ERROR: method:GET url: /${this.props.restName}/images - ${err}`),
      success: ({images, _id}) => this.setState({gallery: images, id: _id})
    });
  }

  render(){
    return(
      <div className='grid'>
        <Header/>
        <Gallery gallery={this.state.gallery}/>
      </div>);
  }
}

export default App;