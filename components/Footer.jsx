const Footer = (props) => {
    const github = "https://www.github.com/linus-jansson"
    const linkedin = "https://www.linkedin.com/in/linus-jansson-94715924a/"

    return (
        <div id="footer" className="text-center">
          <div className="container">
            <div className="socials-media text-center">

              <ul className="list-unstyled">
                <li><a href={github}><i className="bi bi-github" style={{fontSize: 1.5 + 'em'}}></i></a></li>
                <li><a href={linkedin}><i className="bi bi-linkedin" style={{fontSize: 1.5 + 'em'}}></i></a></li>
              </ul>

            </div>

            <p>&copy; Copyrights <a href="https://bootstrapmade.com/">Folio</a>. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer