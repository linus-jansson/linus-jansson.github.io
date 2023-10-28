import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';
import TypedEffect from './TypedEffect';
import { HIconLink } from './Links';
const about = `Been playing around with servers and computers since I was a kid. Playing a lot of games, which turned into a passion for software development. Mostly focusing on fullstack development.`;

export default function HeaderComponent() {
    return (
        <>
            <div id='about' className=''>
                <h1 className='text-4xl font-bold text-zinc-200' 
                    aria-label="Hey! I'm Linus J (a.k.a Limpan)"
                >
                    <TypedEffect
                        stringArry={["I'm Linus (🥖) J", "print('Hello world!')"]} 
                        fallback='Hello! I am Linus J (🥖)' 
                    />
                </h1>
                <p className='font-bold text-2xl text-zinc-200 py-3'>I'm a software developer based in Sweden</p>
                <p className='text-lg text-zinc-300 pb-3'>{about}</p>
                <p className='text-lg text-zinc-300'>I also work on smaller projects on my spare time which are open-source and available <a href="https://github.com/linus-jansson" className="font-bold underline duration-100 hover:text-zinc-600" target='_blank'>here</a>!</p>
            </div>

            {/* <div id='links' className='hidden md:flex md:flex-col md:w-fit'>
                <a href="#projects" className='text-lg font-thin tracking-widest uppercase duration-200 text-zinc-100 md:hover:underline md:hover:text-zinc-600'>My Recent Projects</a>
                <a href="#timeline" className='text-lg font-thin tracking-widest uppercase duration-200 text-zinc-100 md:hover:underline md:hover:text-zinc-600'>My Timeline</a>
                <Link href="/p" className='text-lg font-thin tracking-widest uppercase duration-200 text-zinc-100 md:hover:underline md:hover:text-zinc-600'>My Thoughts</Link>
            </div> */}

            <ul id='socials' className='md:flex flex-wrap gap-12 pt-6 pb-4 md:justify-start hidden'>
                <HIconLink href="https://www.github.com/linus-jansson" text='Github' ><FaGithub size="2rem"/></HIconLink>
                <HIconLink href="mailto:contact@limpan.dev" text='Mail Me' ><FaEnvelope size="2rem"/></HIconLink>
                <HIconLink href="/pgp" text='PGP key' ><FaLock size="2rem"/></HIconLink>
            </ul>
        </>
    )
}
