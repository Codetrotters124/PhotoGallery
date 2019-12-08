import React from 'react';
import styled from 'styled-components';
const {ajax} = require('jquery');
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';


const ModalClass = styled.div`
  visibility: ${props => props.visibility};
`;

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      gallery:[], 
      id:'',
      modal: {
        opacity: '0', 
        visibility: 'hidden',
        scale: '1.1',
        linear: '0.25s'
      }
    };

    this.photoGallery = this.photoGallery.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
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
    console.log(id);
    
    // ajax({
    //   method: 'GET',
    //   url: url,
    //   error: (err) => console.log(`ERROR: method:GET url: /${url} - ${err}`),
    //   success: console.log('PhotoGallery')
    // });

    this.setState({
      modal: {
        opacity: '1', 
        visibility: 'visible',
        scale: '1.0',
        linear: '0s'
      }
    })
  }

  toggleClose(){
    this.setState({
      modal: {
        opacity: '0', 
        visibility: 'hidden',
        scale: '1.1',
        linear: '0.25s'
      }
    });
  }

  render(){
    return(
      <div>
        <Header/>
        <Gallery gallery={this.state.gallery} event={this.photoGallery}/>
        <Modal event={this.toggleClose} modal={this.state.modal}/>
      </div>);
  }
}

export default App;