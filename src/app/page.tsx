import Header from './components/Header'
import PortfolioSection from './components/Portfolio'

import { BsGit } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';

import {VIconLink, HIconLink} from './components/Links'

function FloatingNav() {
    
    return (
        <nav className='sticky bottom-3 z-50 right-0 left-0 py-3 rounded-2xl shadow-2xl md:hidden backdrop-blur-2xl xs:flex-col'>
            <ul className='flex justify-evenly w-full flex-wrap'>
                <VIconLink href="#start"><CgProfile size="2.5rem"/>About Me</VIconLink>
                <VIconLink href="#contact"><FaEnvelope size="2.5rem"/>Socials</VIconLink>
                <VIconLink href="#projects"><BsGit size="2.5rem"/>Projects</VIconLink>
                {/* <IconLink href="#timeline">Thoughts</IconLink> */}
            </ul>
        </nav>
    )
}

function Contact() {
    return (
        <div id='contact'>
            <h2 className='text-4xl font-bold tracking-widest uppercase text-zinc-100'>Get in touch</h2>
            <ul id='socials' className='flex flex-wrap flex-col gap-y-6 pt-6 pb-4 md:justify-start'>
                <HIconLink href="https://www.github.com/linus-jansson" text='Github' ><FaGithub size="2rem"/></HIconLink>
                <HIconLink href="mailto:contact@limpan.dev" text='Mail Me' ><FaEnvelope size="2rem"/></HIconLink>
                <HIconLink href="/pgp" text='PGP key'><FaLock size="2rem"/></HIconLink>
            </ul>
        </div>
    )
}

export default function IndexPage() {

    return (
        <main className='p-6 md:p-0'>
            <div id='start' className='flex flex-col scroll-mt-12 lg:flex-row px-4 md:px-6'>
                {/* Sidebar with links and about text */}
                <div className='pb-12 py-6 md:w-1/3 container mx-auto md:pl-24 md:fixed md:h-screen md:flex md:flex-col md:justify-between md:left-0 md:pt-24 md:pb-12'>
                    <Header />
                </div>

                <div className='md:hidden pb-12'>
                    <Contact />
                </div>

                {/* Projects section */}
                <div className='md:w-2/3 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full container max-w-[1024px]'>
                    <PortfolioSection />
                </div>


            </div>

            {/* Mobile Navbar */}
            <FloatingNav />

            {/* Dark blur effect */}
            <div className='hidden md:fixed bottom-0 left-0 w-screen h-6 bg-black/90 blur-lg'></div>
        </main>
    )
}
