import Data from '../../data'
import Link from 'next/link'
import { FaLink, FaGithub } from 'react-icons/fa'


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
            <div id='projects' className='group'>
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

export default PortfolioSection;