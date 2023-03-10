import React from 'react'

import picA from './ImagePanePics/picA.JPG'
import picB from './ImagePanePics/picB.JPG'
import picC from './ImagePanePics/picC.PNG'
import picD from './ImagePanePics/picD.PNG'
import picE from './ImagePanePics/picE.jpeg'
import picF from './ImagePanePics/picF.JPG'
import picG from './ImagePanePics/picG.JPG'
import picH from './ImagePanePics/picH.JPG'
import picI from './ImagePanePics/picI.JPG'
import picJ from './ImagePanePics/picJ.jpeg'


export default function ImagePane() {
    


    return (
 
            <div width = "1000" className=' bg-[#703C3C] border-[#895235] min-h-36 text-center flex flex-col bg-contain relative content-center pb-20'>
                    {/* <div className = "h-20 bg-white"></div>
                    <div className = "bg-[#895235]"> */}
                        <div className= "flex justify-center pt-4 pb-12 h-8 font-custom text-white" style = {{"font-size":"6vw"}}>
                            Gallery
                        </div>
                        <h2 id = "Gallery"> </h2>
                        
                        <div className = "carousel bg-[#FFF0D2] w-full h-128 relative border-4 border-[#895235] font-custom text-center flex items-center justify-center">
                            
                            <img class = "slidingImage object-cover" src = {picA} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picB} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picC} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picA} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picB} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picC} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picA} alt=""></img>
                            
                            
                            
                            
                            
                            <img class = "slidingImage object-cover" src = {picA} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picB} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picC} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picD} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picE} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picF} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picG} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picH} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picI} alt=""></img>
                            <img class = "slidingImage object-cover" src = {picJ} alt=""></img>

                            
                        </div>
                    {/* </div> */}
                    
            </div>

    )
}