import Link from 'next/link'
import { FaLink, FaGithub } from 'react-icons/fa'
import data from '../../data';

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
                {github && <Link href={github} className='pr-4'> <FaGithub className="duration-100 hover:fill-rose-600" size='1.5em' color='whitesmoke' /> </Link>}
                {page_link && <Link href={page_link}> <FaLink className="duration-100 hover:fill-rose-600" size='1.5em' color='whitesmoke' /> </Link>}

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
                <a href='https://github.com/linus-jansson/' className='underline duration-100 hover:cursor-pointer hover:text-rose-600'>Show more!</a>
            </p>
        </>
    )
}

export default PortfolioSection;