import React from 'react'

export default function Navbar() {
  return (
    // <div className = "grid grid-cols-4 gap-4 px-6 header w-screen">
    //   <div className = 'col-span-1 bg-[#B67B58] w-64'></div>
    //   <div className = 'col-span-1'>
    //     Art Club!
    //   </div>
    //   <div className='col-span-1 flex gap-4 text-xl'>
    //     <a className='px-4 py-2 text-[#F29D4C]' href = "google.com">Calendar</a>
    //     <a className='px-4 py-2 text-[#DF6C36]' href = "google.com">Sketchbook</a>
    //     <a className='px-4 py-2 text-[#AA4517]' href = "google.com">Contact</a>
    //     <a className='px-4 py-2 text-[#703C3C]' href = "google.com">Gallery</a>
    //   </div>
    //   <div className = 'col-span-1 flex-none bg-[#B67B58] w-16'></div>
    // </div>
    // <div class="grid grid-cols-6 gap-4">
    //   <div class="col-span-1 bg-[#B67B58]">
    //   </div>
      <div className='flex justify-end gap-4 text-xl'>
        <a className='px-4 py-2 text-[#F29D4C] font-custom' href = "google.com">Calendar</a>
        <a className='px-4 py-2 text-[#DF6C36] font-custom' href = "google.com">Sketchbook</a>
        <a className='px-4 py-2 text-[#AA4517] font-custom' href = "google.com">Contact</a>
        <a className='px-4 py-2 text-[#703C3C] font-custom' href = "google.com">Gallery</a>
      </div>
  //     <div class="col-span-1 bg-[#B67B58] flex justify-end">
  //     </div>
  // </div>
  )
}
