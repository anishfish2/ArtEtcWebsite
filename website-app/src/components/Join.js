
import React from 'react'

export default function Join() {
    return (
        <div className='bg-[#FFF0D2] min-h-screen text-center flex bg-contain relative content-center'>
            <div className=' flex justify-between w-screen grid grid-cols-10 auto-rows-min gap-4' >
                <div className='col-start-4 row-start-2' >
                    <div className='bg-[#FFF0D2] w-96 h-40 relative border-4 border-[#895235] font-custom text-center flex items-center justify-center'>
                        <div className = 'mx-8'>
                            Traveling Sketchbook info pogchampion
                        </div>
                    </div>
                </div>

                <div className = "col-start-1 col-span-10 row-start-3 row-end-6 row-span-1">
                    <div className = "flex bg-contain relative">
                        <div className = "w-full">
                        <iframe src="https://embed.styledcalendar.com/#DuJRzbRLTtvwOLZd8u5v" title="Styled Calendar" style={{ height:'550%'}} className="styled-calendar-container min-h-1/5 w-full" data-cy="calendar-embed-iframe"></iframe>
                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}