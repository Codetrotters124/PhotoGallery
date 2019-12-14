import React from 'react';
//import styled from 'styled-components';

const MyModal = window.styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  opacity: ${props => props.opacity};
  visibility: ${props => props.visibility}; 
  transform: scale(${props => props.scale});
  transition: visibility 0s linear ${props => props.linear}, opacity 0.25s 0s, transforn 0.25s;
`;

const CloseCursor = window.styled.span`
  cursor: pointer;
  color: rgb(169,169,169);
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: lighter;
`;

const Controls = window.styled.span`
  cursor: pointer;
  position: absolute;
  top: 280px;
  left: -45px
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: rgb(169,169,169);
  font-weight: lighter;
  font-size: 35px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
`;

const Next = window.styled(Controls)`
  right: 0;
  border-radius: 3px 0 0 3px;
  left: 500px;
`;

const Prev = window.styled(Controls)``;

const ModalContent = window.styled.div`
  position: relative;
  top: 50px;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 500px;
  max-width: 500px;
`;

const Image = window.styled.img`
  height: 500px;
  width: 500px;
  margin-bottom: -4px;
`;

const Slides = window.styled.div`
  display: block;
`;

class Modal extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      index: undefined
    };

    this.toggleClose = this.toggleClose.bind(this);
    this.nextORpre = this.nextORpre.bind(this);
  }

  toggleClose(){
    this.props.eventClose(); 
    this.setState({index: undefined});
  }

  nextORpre(event){
    this.props.event(event.target.id);
  }

  render(){
    return(
      <MyModal opacity={this.props.modal.opacity} visibility={this.props.modal.visibility} scale={this.props.modal.scale} linear={this.props.modal.linear}>
        <CloseCursor onClick={this.toggleClose}>&times;</CloseCursor>
        <ModalContent>
          <Slides>
            <Image src={this.props.url}/>
          </Slides>
          <Prev onClick={this.nextORpre} id={-1}>&#10094;</Prev>
          <Next onClick={this.nextORpre} id={1}>&#10095;</Next>
        </ModalContent>

      </MyModal>);
  }
}

export default Modal