 import React from 'react';
import InnerGallery from './InnerGallery.jsx';

const Gallery = (props) => {
  return(
    <section className='gridwrapper'>
      <article id='content1'><InnerGallery/></article>
      <article id='content2'><InnerGallery/></article>
      <article id='content2'><InnerGallery/></article>
      <article id='content3'>4</article>
    </section>);
};

export default Gallery;