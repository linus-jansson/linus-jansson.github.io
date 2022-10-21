import React, { useEffect, useState, useLayoutEffect } from 'react'


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

let expertise = [
    {
        icon: 'fa fa-laptop',
        title: 'Web Development',
        description: 'Since starting my software development journey I have since day one in one way or another been working with web development.'
    },
    {
        icon: 'fa fa-code',
        title: 'Codestack',
        description: 'I have experience with a wide range of languages, but I mainly stick to Python, Javascript, CSS and HTML.'
    },
    {
        icon: 'fa fa-linux',
        title: 'Linux experience',
        description: 'Linux is my daily driver and has been for a long time, I use it for both development and gaming!'
    },
    {
        icon: 'fa-brands fa-docker',
        title: 'Containerizing',
        description: 'The simplicity of Docker is something I really enjoy, I have experience with deployment and Docker.'
    },
    {
        icon: 'fa-brands fa-git-alt',
        title: 'Version control',
        description: 'Git is my go to version control system, I have experience with both Git and Github.'
    },
    {
        icon: 'fa-brands fa-react',
        title: 'React',
        description: 'React is a big part of the industry and is something I am using for my own presonal projects, however I use NextJs for the ease of use of SSR!'
    },
]
const Expertise = () => {
    useEffect(() => {

        // /* Testimonials slider */
        // new Swiper('.expertise-slider', {
        //     speed: 600,
        //     loop: true,
        //     autoplay: {
        //         delay: 5000,
        //         disableOnInteraction: false
        //     },
        //     slidesPerView: 'auto',
        //     pagination: {
        //         el: '.swiper-pagination',
        //         type: 'bullets',
        //         clickable: true
        //     },
        //     breakpoints: {
        //         320: {
        //             slidesPerView: 1,
        //             spaceBetween: 20
        //         },
        //         768: {
        //             slidesPerView: 2,
        //             spaceBetween: 20
        //         },
        //         1200: {
        //             slidesPerView: 4,
        //             spaceBetween: 20
        //         }
        //     }
        // });


    }, [])

    return (
        <div id="services" className='bg-secondary flex justify-center pb-12 pr-5 pl-5 '>

            <div className="max-w-2xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    spaceBetween={50}
                    slidesPerView='auto'
                    loop={true}
                    autoplay={{delay: 5000, disableOnInteraction: false}}
                    pagination={{ clickable: true }}
                >
                    {
                        expertise.map((item, index) => {
                            return (
                                <SwiperSlide className="swiper-slide pb-12" key={index}>
                                    <div className='flex flex-col w-full'>
                                        <i className={'text-3xl  ' + item.icon}></i>
                                        <span className='text-xl'>{item.title}</span>

                                        <p className="text-base text-textSecondary ">
                                            {item.description}
                                        </p>
                                    </div>
                                    
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>

        </div>
    )
}

export default Expertise