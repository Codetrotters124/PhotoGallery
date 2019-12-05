import React from 'react';
import InGrid from './InGrid.jsx';
import Photo from './Photo.jsx';

const Grid0 = (props) => {
  return(
    <section className='grid0'>
      <article id='g0content0'><InGrid images={props.images.slice(0,2)}/></article>
      <article id='g0content1'><Photo img={props.images.slice(1,2)}/></article>
    </section>);
};

export default Grid0;