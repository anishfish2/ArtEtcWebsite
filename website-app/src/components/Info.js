
import React from 'react'

export default function Info() {
    return (
        <div className='bg-[#FFF0D2] min-h-screen text-center flex bg-contain relative content-center'>
            <div className=' flex justify-between w-screen grid grid-cols-10 auto-rows-min gap-4 bg-[#FFF0D2] bg-contain' >
                

                <div className = "col-start-1 col-span-11 row-start-7 row-end-6 row-span-4 w-full h-96 bg-contain bg-[#FFF0D2]">
                    <div className = "flex bg-contain relative bg-[#FFF0D2] h-full">
                        <h2 id = "Calendar"> </h2>

                        <div className = "w-full h-4/6 row-span-20" >
                        <iframe src="https://embed.styledcalendar.com/#DuJRzbRLTtvwOLZd8u5v" title="Styled Calendar"  className="styled-calendar-container min-h-screen h-full w-full" data-cy="calendar-embed-iframe"></iframe>
                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                        </div>
                    </div>
                </div>
                <div className='row-start-1 pt-4 col-span-11' >
                    <h2 id = "Sketchbook"> </h2>
                    <div className= 'pt-8 text-[#703C3C] font-custom text-6xl row-start-1' style = {{"font-size":"3vw"}}>Traveling Sketchbook</div>
                    <div className='bg-[#FFF0D2] w-full h-4/6 relative border-4 border-[#895235] font-custom text-center flex items-center justify-center'>
                        <div className = 'mx-8' style = {{"font-size":"1.5vw"}}>
                        
                            Traveling Sketchbook is a fun and unique tradition in which members are given a week to add two pages of sketches, drawings, scrapbooking, or any creative outlet
                            to a continuously growing notebook! We keep track of these weeks on the Calendar below!
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}