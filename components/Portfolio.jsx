import Image from 'next/image'
import React, {useEffect, useState, useLayoutEffect} from 'react'

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
        <li className="card">
            <a href={props.website}>
                <img src={props.image} className="card__image" alt="" />
            </a>
            
            <div className="card__overlay">
                <div className="card__header">
                    {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                      */}
                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                    <div className="card__header-text">
                        <h3 className="card__title">{props.title}</h3>            
                        <span className="card__status">{props.description}</span>
                    </div>
                </div>
                <div className="card__description">
                    { (props.hasOwnProperty('repo') && props.repo !== undefined ) ? 
                        <a href={props.repo}><i className="fa fa-github"></i></a>
                        :
                        null
                    }

                    { (props.hasOwnProperty('website') && props.website !== undefined) ? 
                        <a href={props.website}><i className="fa fa-link"></i></a>
                        : 
                        null 
                    }
                </div>
            </div>
        </li>
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
        <div id="portfolio" className="paddsection">

            <div className="container">
                <div className="section-title text-center">
                    <h2>Some of my recent projects</h2>
                </div>

                <ul className="cards">
                    {(!portfolioItems) ? 
                        <div className="section-title text-center">
                            <h2>Loading content...</h2> 
                        </div>
                    : portfolioItems}
                </ul>

                <div className="row portfolio-container">


                </div>

            </div>

        </div>
    )


}


export default Portfolio