"use client";
import { useEffect, useRef } from "react";
import Link from 'next/link';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const Socials = (props: any) => {
    return (
        <>
            <Link href={props.link} target='_blank' className='text-slate-100 md:text-sm hover:text-rose-600 duration-100 pr-4 '>
                <span className='md:mr-2 md:inline-block md:align-middle'>
                    <props.icon size="2em" />
                </span>
                <span className='hidden md:mr-2 md:inline-block md:align-middle'>
                    {props.icontext}
                </span>
                {/*
                <span className='hidden md:mr-2 md:inline-block md:align-middle'>
                    <FaLink />
                </span> 
                */}
            </Link>
        </>
    )
}


export default function HeaderComponent() {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;
        const TypedOptions = {
            strings: [
                "alert('Hello world!'); ",
                "I'm Linus Jansson",
                "I'm a software developer",
            ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            contentType: 'null',
            loop: true,
            cursorChar: '_'

        }
        const typed = new Typed(TypedElement.current, TypedOptions);

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-11/12 md:w-1/2 mx-auto p-4 md:pl-24 text-left md:h-screen md:flex md:flex-col md:justify-between md:fixed md:top-0 md:left-0 md:pt-24 md:pb-12'>

            <div id='about' className="pt-26">
                <p className='text-slate-200 text-3xl font-bold'><span ref={TypedElement}></span></p>
                <noscript>
                    <p className='text-slate-200 text-3xl font-bold'>Hello I am Linus</p>
                </noscript>
                <p className='text-slate-200 font-bold md:py-1'>I'm a {new Date().getFullYear() - 2003}yr old software developer from Sweden!</p>
                <p className='text-zinc-400 font-thin md:py-3'>
                    I started my software development journey back in 2015 by making personal websites for game servers I was playing around with. Software development is in the family so naturally I got a passion for it. I am currently studying at NTI-gymnasiet, a high school which has tech in focus, where I specialize in software development and software design.
                </p>
                <p className='text-zinc-400 font-thin'>I also work on smaller projects on my spare time which are open-source and avaliable <a href="https://github.com/linus-jansson" className="duration-100 hover:text-rose-600 underline font-bold" target='_blank'>here</a>!</p>
            </div>

            <div id='links' className='hidden md:flex md:flex-col md:w-fit'>
                <a href="#projects" className='text-slate-100 text-lg font-thin uppercase duration-200 md:hover:underline md:hover:text-rose-600 tracking-widest'>My Recent Projects</a>
                <a href="#timeline" className='text-slate-100 text-lg font-thin uppercase duration-200 md:hover:underline md:hover:text-rose-600 tracking-widest'>My Timeline</a>
            </div>


            <div id='socials' className='flex flex-wrap pt-6 pb-4 justify-around md:justify-start'>
                <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                <Socials link="https://www.linkedin.com/in/linus-jansson-94715924a/" icon={FaLinkedin} icontext='LinkedIn' />
                <Socials link="https://discord.com/users/322015089529978880" icon={FaDiscord} icontext='Discord' />
                <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
            </div>
        </div >
    )
}
