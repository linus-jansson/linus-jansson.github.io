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
    let expertise = [

      {
        icon: 'fa fa-laptop',
        title: 'Web Development',
        description: 'Since starting my software development journey I have since day one in one way or another been working with web developments all forms.'
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

    let elements = []
    expertise.forEach((item, index) => {
      elements.push(
        <Card 
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      )
    });

    return (
        
    <div id="services">
      <div className="container">

        <div className="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            { elements }
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </div>
    )
}

export default Expertise