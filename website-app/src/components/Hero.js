
import React from 'react'

export default function Hero() {
    return (

       
            <div className='bg-deep-maroon text-center flex bg-realBackground bg-contain bg-center relative'>
                <div className=' flex justify-between h-80 w-screen grid grid-cols-8 grid-rows-8 gap-4 ' >
                    <div className='col-span-4 row-span-1 row-start-1 col-start-1 bg-logo h-20 bg-contain bg-no-repeat w-auto h-auto'>                    
                    </div>

                    <div className = 'col-span-2 row-start-4 col-start-2'>
                         <a target="_blank" rel="noopener noreferrer" href = "https://docs.google.com/forms/d/e/1FAIpQLScXlmO6px40I_FkKFUVNantVFj1iYwhNeh5veKmYl5zJ0NLYg/viewform?usp=sf_link">
                             <button className='bg-[#FFF0D2] w-full h-auto relative border-4 border-[#895235] text-xl font-custom text-center flex items-center justify-center' style = {{"font-size":"1.75vw"}}>
                                 Join Now!
                             </button>
                         </a>
                     </div>

                     <div className='row-start-2 col-start-4 col-span-4 row-span-2' >
                         <div className='bg-[#FFF0D2] w-auto h-auto relative border-4 border-[#895235] font-custom text-center flex items-center justify-center'>
                             <div className = 'mx-8' style = {{"font-size":"1.5vw"}}>

                                 Our mission is to provide a place for A&M students to find their creative freedoms and explore the artistic world without restriction or commitment.
                             </div>


                         </div>
                     </div>
                     <div className = 'row-start-4 col-start-6 col-span-2'>
                         <div className='bg-[#FFF0D2] w-full h-auto relative border-4 border-[#895235] text-xl font-custom text-center flex items-center justify-center' style = {{"font-size":"1.5vw"}}>
                             About Us!!!
                         </div>
                     </div>

                </div>
            </div>

    )
}