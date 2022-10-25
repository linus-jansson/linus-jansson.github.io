import React, { useEffect, useState } from 'react'
import Socials from './Socials'
import Image from 'next/image'

import Typed from 'typed.js';

const TypingEffect = (props: { text: Array<string> }) => {
    useEffect(() => {

        // Options for the Typed object
        const options = {
            strings: props.text,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        };

        // New Typed instance
        const typed = new Typed('.typed', options);

        // Destroy Typed instance on unmounting the component to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, [props.text]);

    return (<span className='typed'></span>)
}

const Header = () => {
    const socialProps = {
        dark: false,
        size: 1.5
    }

    return (
        <>
            <div id="header" className={'h-screen relative  bg-cover bg-fixed bg-blend-darken flex justify-center'}>
                <div style={{ zIndex: -1 }} className='brightness-[.35] absolute w-screen h-screen top-0 '>
                    <Image
                        src='/img/background.jpg'
                        alt='Picture of a IDE with ruby code'
                        layout='fill'
                        objectFit="cover"
                    />
                </div>

                <div className="z-1 w-full sm:w-9/12 h-screen ml-10 flex flex-col justify-center text-left">
                    <p className='text-4xl sm:text-5xl font-bold text-textPrimary pb-5'>I&apos;m <TypingEffect text={["Linus Jansson", "A Software Developer"]} /></p>

                    <p className="text-textPrimary text-xl sm:text-xl pb-5">Self-learned developer from Sweden</p>

                    <Socials {...socialProps} />

                </div>

            </div>

        </>


    )
}

export default Header