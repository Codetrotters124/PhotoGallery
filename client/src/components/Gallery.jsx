import React from 'react';
import styled from 'styled-components';
import Grid from './Grid.jsx';

const PositionDiv = styled.div`
  position: relative;
`;

const OverflowDiv = styled.div`
  overflow: hidden;
`;

const FlexDiv = styled.div`
  display: flex;
  background-color: #2d333f;
`;

const Div = styled.div`
  background-size: cover;
  flex-shrink: 0;
  height: 288px;
  width: 288px;
  margin: 0;
  background-image: url(${props => props.url});
`;

const Gallery = (props) => {
  return(
    <PositionDiv>
      <OverflowDiv>
        <FlexDiv>
          <Grid images={props.gallery.slice(0,3)}/>
          <Grid images={props.gallery.slice(3,6)}/>
          <Grid images={props.gallery.slice(6,9)}/>
          <Div url={props.gallery[9] ? props.gallery[9].url : undefined}></Div>
        </FlexDiv>
      </OverflowDiv>
    </PositionDiv>);
};

export default Gallery;