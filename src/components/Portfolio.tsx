import React, { useEffect, useState, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'


const portfolio_items: Array<object> = [
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

interface portfolioCardProps {
    title: string,
    description: string,
    image: string,
    repo?: string,
    website?: string
}

const Card: NextPage = (props: portfolioCardProps) => {
    // https://codepen.io/seyedi/pen/zYoeLEv

    return (

        <div className="bg-secondary dark:bg-darkSecondary antialiased text-gray-900 mt-5 mb-5 sm:mb-3 flex">
            <div id='card' className=''>
                <a href={props.website}>
                    <img src={props.image} alt="random imgee" className="w-full sm:h-48 md:w-auto object-cover object-center rounded-lg shadow-md" />
                </a>
                <div className="relative px-4 pb-4 -mt-16">
                    <div className="bg-white dark:bg-darkPrimary p-4 rounded-lg shadow-lg hover:shadow-2xl duration-500">

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight dark:text-darkTextPrimary">{props.title}</h4>

                        <div className="mt-1">
                            <span className="text-gray-600 text-sm">{props.description}</span>
                        </div>
                        <div className="mt-4">
                            {(props.hasOwnProperty('repo') && props.repo !== undefined) ?
                                <a href={props.repo}><i className="text-xl mr-5 fa fa-github dark:text-darkTextSecondary"></i></a>

                                :
                                null
                            }

                            {(props.hasOwnProperty('website') && props.website !== undefined) ?
                                <a href={props.website}><i className="text-xl fa fa-link  dark:text-darkTextSecondary"></i></a>
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

const Portfolio: NextPage = (props) => {

    return (

        <div id="portfolio" className="pt-24 pl-5 pr-5 sm:pb-24 bg-secondary dark:bg-darkSecondary flex justify-center flex-col w-screen">
            <div className="text-center pb-5 sm:pb-10">
                <p className='text-2xl sm:text-4xl font-bold dark:text-darkTextPrimary'>Some of my recent projects</p>
            </div>
            <div className='grid justify-center'>
                <div className='grid md:grid-cols-3 md:gap-12'>
                    {
                        portfolio_items.map((item, index): AppProps => {
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
                    }
                </div>
            </div>

        </div>

    )


}


export default Portfolio