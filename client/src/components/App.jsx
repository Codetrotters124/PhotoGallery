import React from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
const {ajax} = require('jquery');
import styled from 'styled-components';


const Div = styled.div``;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {gallery:[], id:''};
  }

  componentDidMount(){
    ajax({
      method: 'GET',
      url: `/${this.props.restName}/images`,
      error: (err) => console.log(`ERROR: method:GET url: /${this.props.restName}/images - ${err}`),
      success: ({_id, images}) => this.setState({id:_id, gallery:images})
    });
  }

  render(){
    return(
      <Div>
        <Header/>
        <Gallery gallery={this.state.gallery}/>
      </Div>);
  }
}

export default App;