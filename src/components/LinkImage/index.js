import React from 'react'

export default function LinkImage({ src, img = {}, link = {} }) {
  return (
    <a href={src} target="_blank" {...link}>
      <img src={src} {...img}/>
    </a>
  )
}
