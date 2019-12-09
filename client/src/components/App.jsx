import React from 'react';
const {ajax} = require('jquery');
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      gallery:[], 
      id:'',
      index: undefined,
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
    let index = undefined;

    this.state.gallery.map(({_id}, key) => {
      if(id === _id){
        index = key;
        return;
      }
    });

    // ajax({
    //   method: 'GET',
    //   url: `${this.props.restName}/images/_id/${id}`,
    //   error: (err) => console.log(`ERROR: method:GET url: /${url} - ${err}`),
    //   success: console.log('PhotoGallery')
    // });

    this.setState({
      index: index,
      modal: {
        opacity: '1', 
        visibility: 'visible',
        scale: '1.0',
        linear: '0s'
      }
    });
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
        <Modal event={this.toggleClose} modal={this.state.modal} index={this.state.index} gallery={this.state.gallery}/>
      </div>);
  }
}

export default App;