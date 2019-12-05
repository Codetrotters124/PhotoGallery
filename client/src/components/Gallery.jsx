import React from 'react';
import Grid0 from './Grid0.jsx';
import Grid1 from './Grid1.jsx';
import Photo from './Photo.jsx';


const Gallery = (props) => {
  return(
    <section className='gridwrapper'>
      <article id='content1'><Grid0 images={props.gallery.slice(0,3)}/></article>
      <article id='content2'><Grid1 images={props.gallery.slice(3,6)}/></article>
      <article id='content2'><Grid1 images={props.gallery.slice(6,9)}/></article>
      <article id='content3'><Photo img={props.gallery.slice(8,9)}/></article>
    </section>);
};

export default Gallery;