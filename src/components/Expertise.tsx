import React, { useEffect, useState, useLayoutEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

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

    return (

        <div id="services" className='bg-primary dark:bg-darkPrimary pb-12 flex justify-center align-center flex-wrap'>
            <style jsx>{`
                .swiper-pagination {
                    max-width:100vw;
                }
            `}</style>

            <div className="max-w-2xl w-full pr-5 pl-5 sm:w-11/12 ">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView='auto'
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                    }}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true, type: 'bullets' }}
                >
                    {
                        expertise.map((item, index) => {
                            return (
                                <SwiperSlide className="swiper-slide pb-12 flex justify-center" key={index}>
                                    <div className='flex flex-col '>
                                        <i className={'dark:text-darkTextPrimary text-3xl mb-2 ' + item.icon}></i>
                                        <span className='text-lg sm:text-xl dark:text-darkTextPrimary'>{item.title}</span>

                                        <p className="text-sm sm:text-base text-textSecondary">
                                            {item.description}
                                        </p>
                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>

        </div >
    )
}

export default Expertise