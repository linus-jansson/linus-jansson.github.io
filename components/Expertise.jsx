import React, {useEffect, useState, useLayoutEffect} from 'react'


let expertise = [
  {
    icon: 'fa fa-laptop',
    title: 'Web Development',
    description: 'Since starting my software development journey I have since day one in one way or another been working with web development.'
  },
  {
    icon: 'fa fa-code',
    title: 'Codestack',
    description: 'I have experience with a wide range of languages, but I mainly stick to Python, Javascript, CSS and HTML.'
  },
  {
    icon: 'fa fa-linux',
    title: 'Linux experience',
    description: 'Linux is my daily driver and has been for a long time, I use it for both development and gaming!'
  },
  {
    icon: 'fa-brands fa-docker',
    title: 'Containerizing',
    description: 'The simplicity of Docker is something I really enjoy, I have experience with deployment and Docker.'
  },
  {
    icon: 'fa-brands fa-git-alt',
    title: 'Version control',
    description: 'Git is my go to version control system, I have experience with both Git and Github.'
  },
]

const Card = (props) => {
    return (
        <div className="swiper-slide">
            <div className="services-block">
                <i className={props.icon}></i>
                <span>{props.title}</span>
                <p className="separator">{props.description}</p>
            </div>
        </div>
    )
}


const Expertise = () => {
    const [cards, setCards] = useState(null)
    useEffect(() => {
        let _cards = expertise.map((item, index) => {
            return (
                <Card 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            )
        })

        setCards(_cards)

    }, [])

    return (
        <div id="services">
        <div className="container">
            {(!cards) ? 
                <div className="section-title text-center">
                    <h2>Loading content...</h2> 
                </div>  
            :

                <div className="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                    { cards }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            }
            

        </div>

        </div>
    )
}

export default Expertise