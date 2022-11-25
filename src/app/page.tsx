import Link from 'next/link'
import styles from './timeline.module.css'
import { FaGithub, FaLink } from 'react-icons/fa';
import Header from './Header'

const PortfolioCard = ({ type, title, desc, github, page_link }:
    {
        type: string,
        title: string,
        desc: string,
        github?: string,
        page_link?: string
    }
) => {
    return (
        <div className='bg-zinc-800 p-4 w-full transition rounded-lg md:hover:scale-125 md:shadow-lg md:hover:shadow-lg md:hover:opacity-100 duration-300 my-4'>
            <p className='text-slate-100 uppercase tracking-widest font-thin my-2'>{type}</p>
            <p className='text-slate-100 text-2xl font-bold mb-4'>{title}</p>
            <p className='text-slate-100 pb-4'>{desc}</p>
            <div className='flex flex-row'>
                {github && <Link href={github} className='pr-4'> <FaGithub className="hover:fill-rose-600 duration-100" size='1.5em' color='whitesmoke' /> </Link>}
                {page_link && <Link href={page_link}> <FaLink className="hover:fill-rose-600 duration-100" size='1.5em' color='whitesmoke' /> </Link>}
            </div>
        </div>
    )
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

const Data = {
    projects: [
        {
            type: 'Frontend',
            title: 'Pizzeria Rafiki',
            desc: '',
            github: 'https://github.com/NTIG-Uppsala/pizzeria-rafiki/',
            page_link: 'https://ntig-uppsala.github.io/pizzeria-rafiki/'
        },
        {
            type: 'Frontend',
            title: 'Frisör Saxé',
            desc: '',
            github: 'https://github.com/NTIG-Uppsala/Frisor-Saxe/',
            page_link: 'https://ntig-uppsala.github.io/Frisor-Saxe/'
        },
        {
            type: 'Frontend',
            title: 'Florist Blåklinten',
            desc: 'A website for a flowershop. Uses selenium tests for unit tests and is deployed using Github Workflows on Github Pages',
            github: 'https://github.com/NTIG-Uppsala/florist-blaklinten/',
            page_link: 'https://ntig-uppsala.github.io/florist-blaklinten/'
        },
        {
            type: 'Fullstack',
            title: 'Adminnärvaro',
            desc: 'A fulllstack web application for seeing the attendence of the personeel at NTI gymnasiet. Built with Next.js, Socket.io, Express.js, tailwindcss and Mongodb. The application also has an API that is used by a raspberry pico W to update the attendence for a person with a button press.',
            page_link: 'https://narvaro.ntig.net/'
        },
    ],
    timeline: [{}]
}

export default function IndexPage() {

    return (
        <>
            <div className='md:hidden z-50 sticky shadow-2xl w-screen top-0 bg-rose-700 p-4 flex flex-row justify-around xs:flex-col'>
                <a href="#start" className='text-slate-100 hover:text-slate-300 duration-100 font-bold uppercase tracking-widest hover:underline'>About Me</a>
                <a href="#projects" className='text-slate-100 hover:text-slate-400 duration-100 font-bold uppercase tracking-widest hover:underline'>Projects</a>
                {/* <a href="#timeline">Timeline</a>
                <a href="#">My knowledge</a> */}
            </div>
            <div id='start' className='scroll-mt-12 flex flex-col lg:flex-row pt-4'>
                <Header />
                <div className='px-4 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full md:w-1/2 flex flex-col'>
                    <h1 className='text-slate-100 text-3xl font-bold uppercase tracking-widest text-center'>My Recent Projects</h1>
                    <div id='projects'>
                        {Data.projects.map((project, index) => {
                            return (
                                <PortfolioCard
                                    key={index}
                                    title={project.title}
                                    type={project.type}
                                    desc={project.desc}
                                    github={project?.github}
                                    page_link={project?.page_link}
                                />
                            )
                        })}


                    </div>
                    {/* <div id='timeline' className='p-12'>
                        <h1 className='text-slate-100 text-3xl font-bold uppercase text-center'>My Timeline</h1>
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
                    </div> */}
                </div>

            </div>
            <div className='fixed bottom-0 left-0 w-screen bg-black/90 blur-lg h-6'></div>

        </>
    )
}
