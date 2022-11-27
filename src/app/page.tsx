import Link from 'next/link'
import styles from './timeline.module.css'
import { FaGithub, FaLink } from 'react-icons/fa';
import Header from './Header'
import Data from './data'

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
            <p className='text-slate-100 uppercase tracking-widest font-thin my-2'>{type}</p>
            <p className='text-rose-600 text-2xl font-bold mb-4'>{title}</p>
            <p className='text-zinc-400 pb-4'>{desc}</p>
            <div className='flex flex-row'>
                {github && <Link href={github} className='pr-4'> <FaGithub className="hover:fill-rose-600 duration-100" size='1.5em' color='whitesmoke' /> </Link>}
                {page_link && <Link href={page_link}> <FaLink className="hover:fill-rose-600 duration-100" size='1.5em' color='whitesmoke' /> </Link>}

            </div>
        </div>
    )
}

const PortfolioSection = () => {
    return (
        <>
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
        </>
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

const TimelineSection = () => {
    return (
        <>
            <div id='timeline' className='p-12'>
                <h1 className='text-slate-100 text-3xl font-bold uppercase text-center tracking-widest'>My Timeline</h1>
                <div>
                    <TimelineCard title="Teknikprogrammet (TE)">
                        <p>I went to NTI-gymnasiet, a high school which has it's main focus in tech where from I graduated in June 2022.</p>
                    </TimelineCard>
                    <TimelineCard title="Gymnasieingenjör (T4)">
                        <p>I am currently studying to become a <i>"Gymnasieingenjör"</i> at NTI-gymnasiet, an additional year to high shool which prepares me to work in software development.</p>
                    </TimelineCard>
                </div>
                <p className='text-center text-zinc-600 font-thin'>Want to Hire me? <a href='mailto:contact@limpan.dev' className='underline'>Hit me up!</a></p>
            </div>
        </>
    )
}

export default function IndexPage() {

    return (
        <>
            {/* Mobile Navbar */}
            <div className='md:hidden z-50 sticky shadow-2xl w-screen top-0 bg-rose-700 p-4 flex flex-row justify-around xs:flex-col'>
                <a href="#start" className='text-slate-100 hover:text-slate-300 duration-100 font-bold uppercase tracking-widest hover:underline'>About Me</a>
                <a href="#projects" className='text-slate-100 hover:text-slate-400 duration-100 font-bold uppercase tracking-widest hover:underline'>Projects</a>
                <a href="#timeline" className='text-slate-100 hover:text-slate-400 duration-100 font-bold uppercase tracking-widest hover:underline'>Timeline</a>
            </div>
            <div id='start' className='scroll-mt-12 flex flex-col lg:flex-row pt-4'>
                {/* Sidebar with links and about text */}
                <Header />
                <div className='px-4 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full md:w-1/2 flex flex-col max-w-[1024px] justify-center'>
                    {/* Projects section */}
                    <div className='group'>
                        <PortfolioSection />
                    </div>
                    {/* Timeline section */}
                    <TimelineSection />
                </div>
            </div>

            {/* Dark blur effect */}
            <div className='fixed bottom-0 left-0 w-screen bg-black/90 blur-lg h-6'></div>

        </>
    )
}
