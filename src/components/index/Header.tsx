import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import TypedEffect from './TypedEffect';

const Socials = (props: any) => {
    return (
        <Link href={props.link} target='_blank' className='pr-4 duration-100 text-slate-100 md:text-sm hover:text-rose-600 '>
            <span className='md:mr-2 md:inline-block md:align-middle'>
                <props.icon size="2em" />
            </span>
            <span className='hidden md:mr-2 md:inline-block md:align-middle'>
                {props.icontext}
            </span>
        </Link>
    )
}


export default function HeaderComponent() {
    return (
        <div className='w-11/12 p-4 mx-auto text-left md:w-1/2 md:pl-24 md:h-screen md:flex md:flex-col md:justify-between md:fixed md:top-0 md:left-0 md:pt-24 md:pb-12'>

            <div id='about' className="pt-26">
                <p className='text-3xl font-bold text-slate-200'><TypedEffect /></p>
                <noscript>
                    <p className='text-3xl font-bold text-slate-200'>Hello! I am Linus Jansson</p>
                </noscript>
                <p className='font-bold text-slate-200 md:py-1'>I'm a {new Date().getFullYear() - 2003}yr old software developer from Sweden!</p>
                <p className='font-thin text-zinc-400 md:py-3'>
                    I started my software development journey back in 2015 by making personal websites for game servers I was playing around with. Software development is in the family so naturally I got a passion for it. I am currently studying at NTI-gymnasiet, a high school which has tech in focus, where I specialize in software development and software design.
                </p>
                <p className='font-thin text-zinc-400'>I also work on smaller projects on my spare time which are open-source and avaliable <a href="https://github.com/linus-jansson" className="font-bold underline duration-100 hover:text-rose-600" target='_blank'>here</a>!</p>
            </div>

            <div id='links' className='hidden md:flex md:flex-col md:w-fit'>
                <a href="#projects" className='text-lg font-thin tracking-widest uppercase duration-200 text-slate-100 md:hover:underline md:hover:text-rose-600'>My Recent Projects</a>
                <a href="#timeline" className='text-lg font-thin tracking-widest uppercase duration-200 text-slate-100 md:hover:underline md:hover:text-rose-600'>My Timeline</a>
            </div>


            <div id='socials' className='flex flex-wrap justify-around pt-6 pb-4 md:justify-start'>
                <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                <Socials link="https://www.linkedin.com/in/linus-jansson-94715924a/" icon={FaLinkedin} icontext='LinkedIn' />
                <Socials link="https://discord.com/users/322015089529978880" icon={FaDiscord} icontext='Discord' />
                <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
            </div>
        </div >
    )
}
