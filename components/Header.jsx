import Socials from './Socials'

const Header = (props) => {
    return (
      <div id="hero" className="home">
          <div className="hero-mask">
            <div className="container">
              <div className="hero-content">
                <h1>I&apos;m <span className="typed" data-typed-items="Linus Jansson, a software developer"></span></h1>
                <p>Self-learned developer from Sweden</p>

                <ul className="list-unstyled list-social">
                  <Socials size="2"/>
                </ul>
              </div>
            </div>
          </div>
      </div>
    )
  }

export default Header