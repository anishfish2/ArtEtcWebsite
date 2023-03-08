import React from 'react'
// import Swiper from 'swiper';
export default function ImagePane() {
    

    // const swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     loop: true,
    //     spaceBetween: 30,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });
    return (
        // <div class="grid grid-cols-6 gap-4">
        //     <div class="col-span-1 bg-[#B67B58]">
        //     </div>
            <div width = "1000" className=' bg-[#703C3C] h-96 text-center flex bg-contain relative content-center'>
                {/* <div class = "carousel"> */}
                    <img className = "slidingImage bg-[url('C:\Users\anish\Projects\ArtEtcWebsite\website-app\images\anishpfp.webp')]" alt=""></img>
                    <img className = "slidingImage bg-[url('C:\Users\anish\Projects\ArtEtcWebsite\website-app\images\anishpfp.webp')]" alt="" ></img>
                    <img className = "slidingImage bg-[url('C:\Users\anish\Projects\ArtEtcWebsite\website-app\images\anishpfp.webp')]" alt=""></img>
                    <img className = "slidingImage bg-[url('C:\Users\anish\Projects\ArtEtcWebsite\website-app\images\anishpfp.webp')]" alt=""></img>
                    {/* HELSINFLSIDFNSLDIFNLSDINF */}
                {/* </div> */}
                {/* <div className="swiper-container">
                <div className="swiper-wrapper"> */}
                    <div className="swiper-slide h-96 w-80"><img src="ArtEtcWebsite\website-app\images\sidebars.jpg" alt=""></img>OOGAFUCKINGBOOGA</div>
                    <div className="swiper-slide"><img src="ArtEtcWebsite\website-app\images\sidebars.jpg" alt=""></img></div>
                    <div className="swiper-slide"><img src="ArtEtcWebsite\website-app\images\sidebars.jpg" alt=""></img></div>
                {/* </div>
                </div> */}
            
                    
            </div>
        //     <div class="col-span-1 bg-[#B67B58]">
        //     </div>
        // </div>
    )
}