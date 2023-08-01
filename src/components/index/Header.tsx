import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';
import Socials from './Socials';
import TypedEffect from './TypedEffect';

const about = `Been playing around with servers and computers since I was a kid. Playing a lot of games, which turned into a passion for software development. Mostly focusing on fullstack development.`;

export default function HeaderComponent() {
    return (
        <div className='w-11/12 p-4 mx-auto text-left md:w-1/2 md:pl-24 md:h-screen md:flex md:flex-col md:justify-between md:fixed md:top-0 md:left-0 md:pt-24 md:pb-12'>

            <div id='about' className="pt-26">
            
                <p className='text-3xl font-bold text-slate-200'><TypedEffect stringArry={["I'm Linus J", "(aka Limpan 🥖)", "alert('Hello world!'); "]} /></p>
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
            </div>


            <div id='socials' className='flex flex-wrap justify-around pt-6 pb-4 md:justify-start'>
                <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
                <Socials link="/pgp" icon={FaLock} icontext='PGP key' />
            </div>
        </div >
    )
}
