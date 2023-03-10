import React from 'react'

export default function Contacts() {
    


    return (
 
            <div className='bg-[#C0ABA1] min-h-40 w-full text-center bg-contain relative content-center pb-20 grid grid-rows-2 '>
                <h2 id = "Contacts"> </h2>

                <div className= 'pt-8 text-white font-custom text-6xl row-start-1' style = {{"font-size":"5vw"}}>Contact Us!</div>
                <div className = 'row-start-3 flex justify-around'>
                    <a className='text-white font-custom align-middle text-xl' style = {{"font-size":"2vw"}} href = "https://discord.gg/pKHj44ycw7">Discord</a>
                    <a className='text-white font-custom align-middle text-xl' style = {{"font-size":"2vw"}} href = "https://www.instagram.com/tamuartetc/">Instagram</a>
                    <a className='text-white font-custom align-middle text-xl' style = {{"font-size":"2vw"}} href = "https://groupme.com/join_group/90931999/hBSK7Txg">GroupMe</a>
                    <a className='text-white font-custom align-middle text-xl' style = {{"font-size":"2vw"}} href = "mailto: artetc.tamu@gmail.com">Email</a>
                </div>
                
                    
            </div>

    )
}