

"use client"
import { useState } from 'react'

import RubberBand from './components/RubberBandText'

function PortfolioCard() {
    return (
        <div className='p-4 my-2 md:my-0 rounded-xl bg-stone-800'>
                {/* Card */}
                <span className='font-thin tracking-widest uppercase'>type</span>
                <h1 className='my-4 text-3xl font-bold text-red-500'>Project name</h1>
                {/* Links to project */}
                <ul className='flex py-2 gap-x-2'>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Website</a></li>
                </ul>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae voluptates velit eveniet eius, dolore odit! Dignissimos dolorum dolor quasi et! Quis, ipsa sequi facilis fuga sit accusamus asperiores voluptatem.</p>
        </div>
    )   
}


export default function Projects() {
    const [showProjects, setShowProjects] = useState(false)

    return (
        <>
            {/* Will be shown in mobile and tablet variant */}
            <section className='lg:hidden'>
                <h1 className="my-4 text-3xl font-bold tracking-wide text-center"><RubberBand>My Recent Projects</RubberBand></h1>
                <div className=' md:grid-cols-2 md:gap-4 md:grid'>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </section>
            {/* Will be shown in desktop variant */}
            <section className='hidden lg:block'>
                {/* Arrow */}
                <button 
                    className={' right-0 absolute inline-flex flex-col'} 
                    onClick={() => setShowProjects(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        className={(showProjects) ? 'rotate-180 duration-200' : 'rotate-0 motion-safe:animate-bounceHorizontal duration-200'} width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h2a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-2 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />
                        <path d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                        <path d="M18 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                    </svg>
                    <span style={{textOrientation: 'upright', writingMode:'sideways-lr'}} className='absolute right-0 font-thin tracking-widest top-10'>projects</span>
                </button>
                <h1 className="my-4 text-3xl font-bold tracking-wide text-center"><RubberBand>My Recent Projects</RubberBand></h1>
                <div className={((!showProjects) ? 'hidden' : 'duration-100 transition-all transform') + ' duration-100 transition-transform translate-y-3.5 grid grid-cols-3 gap-4'}>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </section>
        </>
    )
}