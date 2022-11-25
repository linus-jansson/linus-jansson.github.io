import Link from 'next/link'
import styles from './timeline.module.css'
import { FaGithub, FaLink, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

const PortfolioCard = () => {
    return (
        <Link href='https://example.com'>
            <div className='bg-zinc-800 p-4 w-full transition rounded-lg md:hover:scale-125 md:shadow-lg md:hover:shadow-lg md:hover:opacity-100 duration-300 my-4'>
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

const Sidebar = () => {
    return (<></>)

}

const TimelineCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                {children}
            </div>
        </div>
    )
}


export default function IndexPage() {
    return (
        <>
            <div className='md:hidden z-50 sticky shadow-2xl w-screen top-0 bg-rose-600 p-4 flex flex-row justify-around'>
                <a href="#start">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#timeline">Timeline</a>
                <a href="#">My knowledge</a>
            </div>
            <div id='start' className='flex flex-col scroll-mt-12 md:flex-row md:justify-between pt-4'>

                <div className='w-11/12 md:w-1/2 mx-auto p-4 md:pl-24 text-left md:h-screen md:flex md:flex-col md:justify-between md:fixed md:top-0 md:left-0 md:pt-24 md:pb-12'>

                    <div id='about'>
                        <p className='text-slate-200 text-3xl font-bold'>Hello <i>typed.js?</i></p>
                        <p className='text-slate-200 font-bold'>Just A few sentences [...]</p>
                        <p className='text-slate-50 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo illo pariatur sapiente accusamus obcaecati nisi doloribus animi consequuntur ab similique fugit velit, quos dolores quam tenetur adipisci hic earum!</p>
                    </div>
                    <div id='links' className='hidden md:flex md:flex-col text-slate-100 text-lg uppercase font-thin hidden'>
                        <a href="#projects" className='md:duration-100 md:hover:before:content-["->"] md:hover:text-slate-500'> Projects</a>
                        <a href="#timeline" className='md:duration-100 md:hover:before:content-["->"] md:hover:text-slate-500'> Timeline</a>
                        <a href="#" className='md:duration-100 md:hover:before:content-["->"] md:hover:text-slate-500'> My knowledge</a>
                    </div>
                    <div id='socials' className='flex flex-wrap pt-4'>
                        <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                        <Socials link="https://www.linkedin.com/in/linus-jansson-94715924a/" icon={FaLinkedin} icontext='LinkedIn' />
                        <Socials link="https://discord.com/users/322015089529978880" icon={FaDiscord} icontext='Discord' />
                        <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
                    </div>
                </div>

                <div className='px-4 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full md:w-1/2 flex flex-col'>
                    <h1 className='text-slate-100 text-5xl text-center'>My Projects</h1>
                    <div id='projects'>
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
                    <div id='timeline' className='p-12'>
                        <h1 className='text-slate-100 text-5xl text-center'>My Timeline</h1>
                        <div>
                            <TimelineCard title="test">
                                <p>test</p>
                            </TimelineCard>
                            <TimelineCard title="test">
                                <p>test</p>
                            </TimelineCard>
                            <TimelineCard title="test">
                                <p>test</p>
                            </TimelineCard>
                            <TimelineCard title="test">
                                <p>test</p>
                            </TimelineCard>
                            <TimelineCard title="test">
                                <p>test</p>
                            </TimelineCard>
                            <TimelineCard title="test">
                                <p>test</p>
                            </TimelineCard>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
