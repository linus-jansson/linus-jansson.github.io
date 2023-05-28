

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
        </>
    )
}