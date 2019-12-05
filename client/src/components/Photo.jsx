import React from 'react';

const Photo = (props) => {
  return(
      <img src={props.img[0] ? props.img[0].url : undefined}/>
    );
}

export default Photo;