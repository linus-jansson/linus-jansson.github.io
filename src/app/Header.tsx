"use client";
import { useEffect, useRef } from "react";
import Link from 'next/link';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const Socials = (props: any) => {
    return (
        <>
            <Link href={props.link} target='_blank' className='text-slate-100 md:text-sm hover:text-slate-300 duration-100 pr-4'>
                <span className='md:mr-2 md:inline-block md:align-middle'>
                    <props.icon size="2em" />
                </span>
                <span className='hidden md:mr-2 md:inline-block md:align-middle'>
                    {props.icontext}
                </span>
                {/* <span className='hidden md:mr-2 md:inline-block md:align-middle'>
                    <FaLink />
                </span> */}
            </Link>
        </>
    )
}


export default function HeaderComponent() {
    const TypedElement = useRef(null);
    useEffect(() => {
        if (!TypedElement.current) return;

        const typed = new Typed(TypedElement.current, {
            strings: [
                "Full stack developer",
                "Front-end developer",
                "React Developer",
            ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-11/12 md:w-1/2 mx-auto p-4 md:pl-24 text-left md:h-screen md:flex md:flex-col md:justify-between md:fixed md:top-0 md:left-0 md:pt-24 md:pb-12'>

            <div id='about'>
                <p className='text-slate-200 text-3xl font-bold'>Hello! <span ref={TypedElement}></span></p>
                <noscript>
                    <p className='text-slate-200 text-3xl font-bold'>Hello I am Linus</p>
                </noscript>
                <p className='text-slate-200 font-bold'>Just A few sentences [...]</p>
                <p className='text-slate-50 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo illo pariatur sapiente accusamus obcaecati nisi doloribus animi consequuntur ab similique fugit velit, quos dolores quam tenetur adipisci hic earum!</p>
            </div>
            <div id='links' className='hidden md:flex md:flex-col text-slate-100 text-lg uppercase font-thin hidden'>
                <a href="#projects" className='md:duration-100 md:hover:before:content-["->"] md:hover:rose-600'> Projects</a>
                <a href="#timeline" className='md:duration-100 md:hover:before:content-["->"] md:hover:rose-600'> Timeline</a>
                <a href="#" className='md:duration-100 md:hover:before:content-["->"] md:hover:text-slate-500'> My knowledge</a>
            </div>
            <div id='socials' className='flex flex-wrap pt-4'>
                <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                <Socials link="https://www.linkedin.com/in/linus-jansson-94715924a/" icon={FaLinkedin} icontext='LinkedIn' />
                <Socials link="https://discord.com/users/322015089529978880" icon={FaDiscord} icontext='Discord' />
                <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
            </div>
        </div>
    )
}
