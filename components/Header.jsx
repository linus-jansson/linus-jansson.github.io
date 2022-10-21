import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Socials from './Socials'

import Typed from 'typed.js';

const ImageLoader = (props) => {
    return "test"
}

const TypingEffect = ({ text }) => {
    console.log(text)
    useEffect(() => {

        // Options for the Typed object
        const options = {
            strings: text,
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
    }, [text]);

    return (<span className='typed'></span>)
}

const Header = (props) => {



    return (
        <>
            <div id="header" style={{ backgroundImage: 'url("/img/background.jpg")', backgroundColor: 'rgba(0, 0, 0, .65)' }} className={'h-screen bg-cover bg-fixed bg-blend-darken flex justify-center'}>
                <div className="w-9/12 h-screen ml-10 flex flex-col justify-center text-left">
                    <p className='text-3xl font-bold text-textPrimary'>I&apos;m <TypingEffect text={["Linus Jansson", "A Software Developer"]} /></p>

                    <p className="text-textPrimary text-lg">Self-learned developer from Sweden</p>

                    <Socials size="2" dark={false} />

                </div>

            </div>

        </>


    )
}

export default Header