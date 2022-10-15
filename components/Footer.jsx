import Socials from './Socials'

const Footer = (props) => {
    return (
        <div id="footer" className="text-center">
          <div className="container">
            <div className="socials-media text-center">

              <ul className="list-unstyled list-social">
                <Socials size="1.5"/>
              </ul>

            </div>

            <p>&copy; Copyrights <a href="https://bootstrapmade.com/">Folio</a>. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer