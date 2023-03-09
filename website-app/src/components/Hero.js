
import React from 'react'

export default function Hero() {
    return (

            <div className='bg-deep-maroon text-center flex bg-realBackground bg-contain relative'>
                <div className=' flex justify-between h-96 w-screen grid grid-cols-6 gap-4 ' >
                    <div className='col-span-3 row-span-1'>
                    </div>
                    <div className = 'col-span-1 row-start-3 col-start-2'>
                        <div className='bg-[#FFF0D2] w-40 h-12 relative border-4 border-[#895235] text-xl font-custom text-center flex items-center justify-center'>
                            Join Now!
                        </div>
                    </div>

                    <div className='col-span-1 row-span-4 row-start-2 col-start-4' >
                        <div className='bg-[#FFF0D2] w-96 h-80 relative border-4 border-[#895235] font-custom text-center flex items-center justify-center'>
                            <div className = 'mx-8'>
                                Our mission is to provide a place for A&M students to find their creative freedoms and explore the artistic world without restriction or commitment.
                            </div>


                        </div>
                    </div>
                    <div className = 'col-span-1 row-start-5 col-start-5'>
                        <div className='bg-[#FFF0D2] w-40 h-12 relative border-4 border-[#895235] text-xl font-custom text-center flex items-center justify-center'>
                            About Us!!!
                        </div>
                    </div>

                </div>
            </div>

    )
}