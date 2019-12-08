import React from 'react';
import styled from 'styled-components';
const {ajax} = require('jquery');
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';


const Div = styled.div``;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {gallery:[], id:''};

    this.photoGallery = this.photoGallery.bind(this);
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: `/${this.props.restName}/images`,
      error: (err) => console.log(`ERROR: method:GET url: /${this.props.restName}/images - ${err}`),
      success: ({_id, images}) => this.setState({id:_id, gallery:images})
    });
  }

  photoGallery(id){
    let url = `${this.props.restName}/images/_id/${id}`;
    
    ajax({
      method: 'GET',
      url: url,
      error: (err) => console.log(`ERROR: method:GET url: /${url} - ${err}`),
      success: console.log('PhotoGallery')
    });
  }

  render(){
    return(
      <Div>
        <Header/>
        <Gallery gallery={this.state.gallery} event={this.photoGallery}/>
        <Modal/>
      </Div>);
  }
}

export default App;