import Link from 'next/link'
import { FaGithub, FaLink, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const PortfolioCard = () => {
    return (
        <Link href='https://example.com'>
            <div className='bg-zinc-800 w-full p-4 rounded-lg md:hover:scale-125 duration-300 my-4'>
                <p className='text-slate-100 uppercase'>Project Type</p>
                <p className='text-slate-100'>Project Name</p>
                <p className='text-slate-100'>Project Description</p>
                <p className='text-slate-100'>Project Description</p>

            </div>
        </Link>
    )
}

const Socials = (props: any) => {
    return (
        <>
            <Link href={props.link} target='_blank' className='text-slate-100 md:text-sm hover:text-slate-300 duration-100 pr-4 '>
                <span className='mr-2 inline-block align-middle' >
                    <props.icon />
                </span>
                <span className='mr-2 inline-block align-middle' >
                    {props.icontext}
                </span>
                <span className='mr-2 inline-block align-middle' >
                    <FaLink />
                </span>
            </Link>
        </>
    )
}

const Nav = () => {
    return (<></>)

}


export default function IndexPage() {
    return (
        <>
            <div className='flex flex-col md:flex-row pt-4 md:relative'>
                <div className='mx-auto md:pl-24 text-left md:h-screen md:flex md:flex-col md:justify-around md:fixed'>

                    <div id='about'>
                        <p className='text-slate-100 text-3xl font-bold'>Hello I'm Linus</p>
                        <p className='text-slate-100 text-lg'>I am a self thaught software developer</p>
                        <p className='text-slate-100 font-thin'>I live in Sweden</p>
                    </div>
                    <div id='links'>
                    </div>
                    <div id='socials' className='flex flex-wrap pt-4'>
                        <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                        <Socials link="https://www.linkedin.com/in/linus-jansson-94715924a/" icon={FaLinkedin} icontext='LinkedIn' />
                        <Socials link="https://discord.com/users/322015089529978880" icon={FaDiscord} icontext='Discord' />
                        <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
                    </div>
                </div>
                <div className='md:absolute md:right-0 md:pr-10 mb-12 w-1/2 md:max-w-[536px] lg:max-w-[736px] flex flex-col'>
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />


                </div>

            </div>

        </>
    )
}
