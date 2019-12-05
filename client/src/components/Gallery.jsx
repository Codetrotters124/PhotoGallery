import React from 'react';
import Grid0 from './Grid0.jsx';
import Grid1 from './Grid1.jsx';

const Gallery = (props) => {
  return(
    <section className='gridwrapper'>
      {console.log(props.gallery)}
      <article id='content1'><Grid0/></article>
      <article id='content2'><Grid1/></article>
      <article id='content2'><Grid1/></article>
      <article id='content3'>5</article>
    </section>);
};

export default Gallery;