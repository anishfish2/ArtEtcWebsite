
import React from 'react'

export default function Hero() {
    return (
        <div className='bg-deep-maroon text-center flex bg-realBackground bg-contain relative'>
            <div className=' flex justify-between h-96 w-screen' >
                
                <div className = 'pt-60 pl-56'>
                    <div className='bg-[#FFF0D2] w-40 h-12 relative border-4 border-[#895235] text-xl font-custom text-center flex items-center justify-center'>
                        About Us!!!
                    </div>
                </div>

                <div className='pt-12 pr-72' >
                    <div className='bg-[#FFF0D2] w-96 h-80 relative border-4 border-[#895235] font-custom text-center flex items-center justify-center'>
                        <div className = 'mx-8'>
                            Our mission is to provide a place for A&M students to find their creative freedoms and explore the artistic world without restriction or commitment.
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}