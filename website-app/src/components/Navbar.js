import React from 'react'

import useTitle from './title.js';


export default function Navbar() {
  useTitle("art-etc")
  return (
      <div className='w-full flex justify-between text-xl'>
        <div className = 'w-full flex justify-start'>
          
        </div>
        

        <div className = 'flex justify-end gap-8 h-full w-3/4 m-auto'>
          <a className= 'text-[#F29D4C] font-custom m-auto' href = "#Calendar" style = {{"font-size":"2vw"}}>Calendar</a>
          <a className='text-[#DF6C36] font-custom' href = "#Sketchbook" style = {{"font-size":"2vw"}}>Sketchbook</a>
          <a className='text-[#AA4517] font-custom' href = "#Contacts" style = {{"font-size":"2vw"}}>Contact</a>
          <a className='text-[#703C3C] font-custom' href = "#Gallery" style = {{"font-size":"2vw"}}>Gallery</a>
        </div>
        
      </div>

  )
}
