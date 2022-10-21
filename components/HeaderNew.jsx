import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Socials from './SocialsNew'

const TypingEffect = (props) => {
    // https://codepen.io/Coding_Journey/pen/BEMgbX?&page=1
    useEffect(() => {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["hard", "fun", "a journey", "LIFE"];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            }
            else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }, [])


    return (
        <div class="container">
            <p>Coding is <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
        </div>
    )
}

const ImageLoader = (props) => {
    return "test"
}

const Header = (props) => {

    return (
        <>
            <div id="hero" className='h-screen bg-[url("/img/background.jpg")] bg-cover'>
                {/* <Image
                    loader={ImageLoader}
                    src="/img/background.jpg"
                    layout="fill"
                    alt="Picture of the author"
                    className='object-cover z-0'
                /> */}
                <div className="w-11/12 h-screen ml-10 flex flex-col justify-center text-left">
                    <p className='text-3xl font-bold text-textPrimary'>I&apos;m <span className="typed" data-typed-items="Linus Jansson, a software developer"></span></p>
                    {/* <TypingEffect /> */}
                    <span
                        className="txt-rotate"
                        data-period="2000"
                        data-rotate='[ "Healthy.", "Nutritious.", "Delicious.", "fun!" ]'>test</span>
                    <p className="text-textPrimary text-lg">Self-learned developer from Sweden</p>

                    <Socials size="2" />

                </div>

            </div>

        </>


    )
}

export default Header