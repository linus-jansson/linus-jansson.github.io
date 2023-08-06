"use client";

import { FaGithub, FaEnvelope, FaLock, FaLink } from 'react-icons/fa';

import Typed from '@/components/Typed';
import Social from '@/components/Social';


const about = `Been playing around with servers and computers since I was a kid. Playing a lot of games, which turned into a passion for software development. Mostly focusing on fullstack development.`;

const data = {
    projects: [
        {
            id: 0,
            type: 'Full stack',
            title: 'Adminnärvaro',
            desc: 'A full stack web application for seeing the attendence of the personeel at NTI gymnasiet. Built with Next.js, JWT, Socket.io, Express.js, tailwindcss and Mongodb. The application also has an built in API that being used by a raspberry pico W to update the attendence for a person with a button press.',
            github: 'https://github.com/NTIG-Uppsala/admin-narvaro',
            page_link: 'https://narvaro.ntig.net/'
        },
        {
            id: 1,
            type: 'C#',
            title: 'POS system',
            desc: 'A POS system for hotels. Built with c# and winforms. Also uses NUnit Tests for unit testing.',
            github: 'https://github.com/NTIG-Uppsala/hotell-kassasystem'
        },
        {
            id: 2,
            type: 'Python',
            title: 'BTD6 farmer',
            desc: 'A macro system for the game Bloons td 6. Uses Relies on OCR with tesseract and template matching with opencv for navigation and interacting with the game.',
            github: 'https://github.com/linus-jansson/btd6farmer'
        },
        {
            id: 3,
            type: 'Frontend',
            title: 'Florist Blåklinten',
            desc: 'A website for a flowershop. Uses selenium SDK for unit tests and is deployed using Github Workflows on Github Pages',
            github: 'https://github.com/NTIG-Uppsala/florist-blaklinten/',
            page_link: 'https://ntig-uppsala.github.io/florist-blaklinten/'
        }
    ],
    timeline: [{}]
}



const PortfolioCard = ({ type, title, desc, github, page_link, latest_change }:
    {
        type: string,
        title: string,
        desc: string,
        github?: string,
        page_link?: string,
        latest_change?: Date
    }
) => {
    return (

        <div className='bg-zinc-800 p-4 w-full transition rounded-lg md:hover:scale-110 md:shadow-lg md:hover:shadow-2xl md:hover:!opacity-100 md:group-hover:opacity-50 duration-300 my-4'>
            {/* https://stackoverflow.com/questions/65170132/tailwindcss-use-hover-over-group-hover */}
            <p className='my-2 font-thin tracking-widest uppercase text-slate-100'>{type}</p>
            <p className='mb-4 text-2xl font-bold text-rose-600'>{title}</p>
            <p className='pb-4 text-zinc-400'>{desc}</p>
            <div className='flex flex-row'>
                {github && <a href={github} target="_blank" className='pr-4'> <FaGithub className="duration-100 hover:fill-rose-600" size='1.5em' color='whitesmoke' /> </a>}
                {page_link && <a href={page_link} target="_blank"> <FaLink className="duration-100 hover:fill-rose-600" size='1.5em' color='whitesmoke' /> </a>}

            </div>
        </div>
    )
}

const PortfolioSection = () => {
    return (
        <>
            <h1 className='text-3xl font-bold tracking-widest text-center uppercase text-slate-100'>My Recent Projects</h1>
            <div id='projects' className='group'>
                {data.projects.map((project: any) => {
                    return (
                        <PortfolioCard
                            key={project.id}
                            title={project.title}
                            type={project.type}
                            desc={project.desc}
                            github={project?.github}
                            page_link={project?.page_link}
                        />
                    )
                })}
            </div>
            <p className='text-lg font-thin text-center text-slate-100'>
                <a href='https://github.com/linus-jansson/' target='_blank' className='underline duration-100 hover:cursor-pointer hover:text-rose-600'>See more!</a>
            </p>
        </>
    )
}

function Header() {
    return (
        <div className='w-11/12 p-4 mx-auto text-left md:w-1/2 md:pl-24 md:h-screen md:flex md:flex-col md:justify-between md:fixed md:top-0 md:left-0 md:pt-24 md:pb-12'>

            <div id='about' className="pt-26">

                <p className='text-3xl font-bold text-slate-200'><Typed stringArry={["I'm Linus J", "(aka Limpan 🥖)", "alert('Hello world!'); "]} /></p>
                <noscript>
                    <p className='text-3xl font-bold text-slate-200'>Hello! I am Linus aka Limpan</p>
                </noscript>
                <p className='font-bold text-slate-200 md:py-1'>I'm a software developer based in Sweden</p>
                <p className='font-thin text-zinc-400 md:py-3'>
                    {about}
                </p>
                <p className='font-thin text-zinc-400'>I also work on smaller projects on my spare time which are open-source and avaliable <a href="https://github.com/linus-jansson" className="font-bold underline duration-100 hover:text-rose-600" target='_blank'>here</a>!</p>
            </div>

            <div id='links' className='hidden md:flex md:flex-col md:w-fit'>
                <a href="#projects" className='text-lg font-thin tracking-widest uppercase duration-200 text-slate-100 md:hover:underline md:hover:text-rose-600'>My Recent Projects</a>
                <a href="#timeline" className='text-lg font-thin tracking-widest uppercase duration-200 text-slate-100 md:hover:underline md:hover:text-rose-600'>My Timeline</a>
                {/* <Link href="/p" className='text-lg font-thin tracking-widest uppercase duration-200 text-slate-100 md:hover:underline md:hover:text-rose-600'>My Thoughts</Link> */}
            </div>


            <div id='socials' className='flex flex-wrap justify-around pt-6 pb-4 md:justify-start'>
                <Social link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                <Social link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
                <Social link="/pgp" icon={FaLock} icontext='PGP key' />
            </div>
        </div >
    )
}


export default function Home() {
    return (
        <>
            {/* Mobile Navbar */}
            <div className='sticky top-0 z-50 flex flex-row justify-around w-screen p-4 shadow-2xl md:hidden bg-rose-700 xs:flex-col'>
                <a href="#start" className='font-bold tracking-widest uppercase duration-100 text-slate-100 hover:text-slate-300 hover:underline'>About Me</a>
                <a href="#projects" className='font-bold tracking-widest uppercase duration-100 text-slate-100 hover:text-slate-400 hover:underline'>Projects</a>
                <a href="#timeline" className='font-bold tracking-widest uppercase duration-100 text-slate-100 hover:text-slate-400 hover:underline'>Timeline</a>
            </div>
            <div id='start' className='flex flex-col pt-4 scroll-mt-12 lg:flex-row'>
                {/* Sidebar with links and about text */}
                <Header />
                <div className='px-4 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full md:w-1/2 flex flex-col max-w-[1024px] justify-center'>
                    {/* Projects section */}
                    <PortfolioSection />
                </div>
            </div>

            {/* Dark blur effect */}
            <div className='fixed bottom-0 left-0 w-screen h-6 bg-black/90 blur-lg'></div>

        </>
    )
}
