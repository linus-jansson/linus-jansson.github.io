import { FaLink, FaGithub } from 'react-icons/fa'
import data from '../../data';

import {VIconLink} from './Links'


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
        <div className='bg-zinc-800 p-4 w-full transition rounded-lg md:hover:scale-105 md:shadow-lg md:hover:shadow-2xl md:hover:!opacity-100 md:group-hover:opacity-50 duration-300 my-4'>
            {/* https://stackoverflow.com/questions/65170132/tailwindcss-use-hover-over-group-hover */}
            <p className='my-2 text-lg font-thin tracking-widest uppercase text-zinc-200'>{type}</p>
            <p className='mb-4 text-3xl font-bold text-rose-600'>{title}</p>
            <p className='pb-4 text-lg text-zinc-100'>{desc}</p>
            <ul className='flex flex-row gap-12'>
                {github && 
                    <VIconLink href={github}><FaGithub size='1.75rem' />Github</VIconLink>
                }
                {page_link &&
                    <VIconLink href={page_link}><FaLink size='1.75rem'/>Live</VIconLink>
                }
            </ul>
        </div>
    )
}

const PortfolioSection = () => {
    return (
        <>
            <h1 className='text-4xl font-bold tracking-widest uppercase text-zinc-100'>My Recent Projects</h1>
            <div id='projects' className='group grid gird-cols-2'>
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
            <p className='text-2xl tracking-widest text-center uppercase text-zinc-100'>
                <a href='https://github.com/linus-jansson/' target='_blank' className='shadow-[0_1px_0_0_currentcolor] duration-100 hover:cursor-pointer hover:text-zinc-600'>See more</a>
            </p>
        </>
    )
}

export default PortfolioSection;