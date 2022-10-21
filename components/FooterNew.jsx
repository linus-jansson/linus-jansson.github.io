import Socials from './Socials'

const Footer = (props) => {
    return (
        <div id="footer" className="text-center">
          <div className="container">
            <div className="socials-media text-center">

              <ul className="list-unstyled list-social">
                <Socials size="1"/>
              </ul>

            </div>

            <p>&copy; Copyrights. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer