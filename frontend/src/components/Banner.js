import React from 'react';
import img from './imgs/img1.jpg';
import './ComponentsStyle/BannerStyle.css'


function Banner() {
  return (
      <div className='image-container'>
        <img src={img} alt="Logo" className='banner' />
        <hr></hr>
      </div>
  );
}

export default Banner;
