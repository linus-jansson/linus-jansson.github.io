const Header = (props) => {
    const github = "https://www.github.com/linus-jansson"
    const linkedin = "https://www.linkedin.com/in/linus-jansson-94715924a/"

    return (
      <div id="hero" className="home">
          <div className="hero-mask">
            <div className="container">
              <div className="hero-content">
                <h1>I&apos;m <span className="typed" data-typed-items="Linus Jansson"></span></h1>
                <p>Self-learned developer from Sweden</p>

                <ul className="list-unstyled list-social">
                  <li><a href={github}><i className="bi bi-github" style={{fontSize: 2 + 'em'}}></i></a></li>
                  <li><a href={linkedin}><i className="bi bi-linkedin" style={{fontSize: 2 + 'em'}}></i></a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    )
  }

export default Header