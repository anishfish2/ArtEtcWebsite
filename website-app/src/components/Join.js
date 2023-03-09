
import React from 'react'

export default function Join() {
    return (
        <div className='bg-[#FFF0D2] min-h-screen text-center flex bg-contain relative content-center'>
            <div className=' flex justify-between w-screen grid grid-cols-10 auto-rows-min gap-4 bg-[#FFF0D2] bg-contain' >
                

                <div className = "col-start-1 col-span-11 row-start-2 row-end-6 row-span-4 h-96 bg-containbg-[#FFF0D2]">
                    <div className = "flex bg-contain relative bg-[#FFF0D2]" style={{ height:'300%'}}>
                        <h2 id = "Calendar"> </h2>

                        <div className = "w-full" style={{ height:'100%'}}>
                        <iframe src="https://embed.styledcalendar.com/#DuJRzbRLTtvwOLZd8u5v" title="Styled Calendar" style={{ height:'100%'}} className="pb-36 styled-calendar-container min-h-screen w-full" data-cy="calendar-embed-iframe"></iframe>
                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                        </div>
                    </div>
                </div>
                <div className='col-start-4 row-start-1 pt-4' >
                    <h2 id = "Sketchbook"> </h2>
                    <div className='bg-[#FFF0D2] w-96 h-40 relative border-4 border-[#895235] font-custom text-center flex items-center justify-center'>
                        <div className = 'mx-8'>
                        
                            Traveling Sketchbook info pogchampion
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}