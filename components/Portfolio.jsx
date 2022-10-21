import Image from 'next/image'
import React, { useEffect, useState, useLayoutEffect } from 'react'

import Styles from '../styles/card.module.css'

const portfolio_items = [
    {
        title: "Pizzeria Rafiki",
        description: "Frontend project",
        image: "img/portfolio/pizzeria.png",
        repo: "https://github.com/NTIG-Uppsala/pizzeria-rafiki/",
        website: "https://ntig-uppsala.github.io/pizzeria-rafiki/"
    },
    {
        title: "Frisör Saxé",
        description: "Frontend project",
        image: "img/portfolio/barbershop.png",
        repo: "https://github.com/NTIG-Uppsala/Frisor-Saxe/",
        website: "https://ntig-uppsala.github.io/Frisor-Saxe/"
    },
    {
        title: "Florist Blåklinten",
        description: "Frontend project",
        image: "img/portfolio/flowershop.png",
        repo: "https://github.com/NTIG-Uppsala/florist-blaklinten/",
        website: "https://ntig-uppsala.github.io/florist-blaklinten/"
    },
    {
        title: "Admin Närvaro",
        description: "Fullstack project",
        image: "img/portfolio/narvaro.png",
        website: "https://narvaro.ntig.net/"
    },
]

const Card = (props) => {
    // https://codepen.io/seyedi/pen/zYoeLEv

    return (

        <div className="bg-secondary antialiased text-gray-900 mt-5 mb-5 sm:mb-3">
            <div id='card' className=''>
                <a href={props.website}>
                    <img src={props.image} alt="random imgee" className="w-full sm:h-48 sm:w-auto object-cover object-center rounded-lg shadow-md" />
                </a>
                <div className="relative px-4 pb-4 -mt-16">
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl duration-500">

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.title}</h4>

                        <div className="mt-1">
                            <span className="text-gray-600 text-sm">{props.description}</span>
                        </div>
                        <div className="mt-4">
                            {(props.hasOwnProperty('repo') && props.repo !== undefined) ?
                                <a href={props.repo}><i className="text-xl mr-5 fa fa-github"></i></a>

                                :
                                null
                            }

                            {(props.hasOwnProperty('website') && props.website !== undefined) ?
                                <a href={props.website}><i className="text-xl fa fa-link"></i></a>
                                :
                                null
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Portfolio = (props) => {
    const [portfolioItems, setPortfolioItems] = useState(null)

    useEffect(() => {
        let p_items_list = portfolio_items.map((item, index) => {
            return (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    website={item?.website}
                    repo={item?.repo}
                />
            )
        })
        setPortfolioItems(p_items_list)
    }, [])

    return (

        <div id="portfolio" className="pt-24 pl-5 pr-5 sm:pb-48 bg-secondary">
            <div className="text-center">
                <p className='text-2xl font-bold'>Some of my recent projects</p>
            </div>
            <div className='flex flex-col sm:flex-row sm:flex-wrap sm:gap-12 sm:flex sm:justify-center'>
                {(!portfolioItems) ?
                    <div className="text-center">
                        <h2>Loading content...</h2>
                    </div>
                    : portfolioItems}
            </div>


        </div>

    )


}


export default Portfolio