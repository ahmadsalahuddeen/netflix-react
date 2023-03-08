import React, { useEffect } from 'react'
import './Banner.css'
function Banner() {
  useEffect(()=>{

  }, [])
  return (
    <div className='banner'>
<div className='content'>
    <h1 className='title'>Movie Name</h1>
    <div className='banner-buttons'>
<button className='button'>Play</button>
<button className='button'>My List</button>

    </div>
    <h1 className='description'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni</h1>
</div>
<div className='fade-bottom'></div>

    </div>
  )
}

export default Banner