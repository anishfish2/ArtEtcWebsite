import React from 'react'

export default function Navbar() {
  return (
      <div className='flex justify-end gap-4 text-xl'>
        <h2 className='px-4 py-2 text-[#DF6C36] font-custom text-7xl' >Art Etc</h2>
        <h2 className = 'w-28'> </h2>


        <a className='px-4 py-2 text-[#F29D4C] font-custom' href = "#Calendar">Calendar</a>
        <a className='px-4 py-2 text-[#DF6C36] font-custom' href = "#Sketchbook">Sketchbook</a>
        <a className='px-4 py-2 text-[#AA4517] font-custom' href = "#Contacts">Contact</a>
        <a className='px-4 py-2 text-[#703C3C] font-custom' href = "#Gallery">Gallery</a>
      </div>

  )
}
