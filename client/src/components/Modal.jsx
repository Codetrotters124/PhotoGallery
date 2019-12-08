import React from 'react';
import styled from 'styled-components';

const ModalClass = styled.div`
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

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 24rem;
  border-radius: 0.5rem;
`;

const CloseModal = styled.span`
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: lightgray;
`;

class Modal extends React.Component{
  constructor(props){
    super(props);

    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleClose(){
    this.props.event(); 
  }

  render(){
    return(
      <div>
        <ModalClass opacity={this.props.modal.opacity} visibility={this.props.modal.visibility} scale={this.props.modal.scale} linear={this.props.modal.linear}>
          <ModalContent>
            <CloseModal onClick={this.toggleClose}>&times;</CloseModal>
            <h1>Hello, I am a modlal!</h1>
          </ModalContent>
        </ModalClass>
      </div>);
  }
}

export default Modal