import React from 'react';
import InGrid from './InGrid.jsx';
import Photo from './Photo.jsx';

const Grid1 = (props) => {
  return(
    <section className = 'grid1'>
      {console.log(props)}
      <article id='g1content0'><InGrid/></article>
      <article id='g1content1'><Photo img={props.images.slice(1,2)}/></article>
    </section>);
};

export default Grid1;