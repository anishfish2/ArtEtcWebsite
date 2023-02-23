import React from 'react'

export default function Navbar() {
  return (
    <div className = "flex justify-between px-6 header">
      <div>
        Art Club!
      </div>
      <div className='flex gap-4 text-xl'>
        <a className='px-4 py-2 text-[#F29D4C]' href = "google.com">Calendar</a>
        <a className='px-4 py-2 text-[#DF6C36]' href = "google.com">Sketchbook</a>
        <a className='px-4 py-2 text-[#AA4517]' href = "google.com">Contact</a>
        <a className='px-4 py-2 text-[#703C3C]' href = "google.com">Gallery</a>
      </div>
    </div>
  )
}
