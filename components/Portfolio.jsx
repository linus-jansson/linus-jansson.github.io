const Portfolio_card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <a href={props.website}>
                <img src={props.image} className="img-fluid" alt="" />
            </a>
            <div className="portfolio-info">
                <h4>{ props.title }</h4>
                <p>{props.description}</p>
                { (props.hasOwnProperty('repo') && props.repo !== undefined ) ? 
                    <a href={props.repo} className="portfolio-lightbox preview-link" title="App 1"><i className="fa fa-github"></i></a>
                    :
                    null
                }

                { (props.hasOwnProperty('website') && props.website !== undefined) ? 
                    <a href={props.website} className="details-link"><i className="fa fa-link"></i></a>
                    : 
                    null 
                }
            </div>
        </div>
    )
}

const Portfolio = (props) => {
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
    let element_array = []
    let i = 0;
    portfolio_items.forEach((item) => {
        element_array.push(
            <Portfolio_card 
                key={i}    
                title={item.title} 
                description={item.description} 
                image={item.image} 
                website={item?.website} 
                repo={item?.repo}
                />
        )
        i++;
    })

    return (
        <div id="portfolio" className="paddsection">

            <div className="container">
                <div className="section-title text-center">
                    <h2>Some of my recent projects</h2>
                </div>


                <div className="row portfolio-container">

                    {element_array}

                </div>

            </div>

        </div>
    )


}


export default Portfolio