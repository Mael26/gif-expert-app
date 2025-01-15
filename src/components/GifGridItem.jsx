import React from 'react'

export const GifGridItem = (img) => {
  return (
    <div className='card'>
        <img key={img.id} alt={img.title} src={img.url}/>
        <p>{img.title}</p>
    </div>
  )
}
