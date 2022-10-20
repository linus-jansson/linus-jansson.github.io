const About = (props) => {
    let age = new Date().getFullYear() - 2003;
    return (
        <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-7">

              <div className="about-descr">
                <h2>About me</h2>

                <p className="p-heading">I&apos;m a {age}yr old software developer from Sweden</p>
                <p className="separator">I started development back in 2015 by making personal websites for game servers I was playing around with. Software development is in the familiy so naturally I got a passion for it. Later on I went to NTI-gymnasiet, a high school which has tech in focus, where I specialized in sofware development. Now I usually work on small projects on my spare time which are open-source and avaliable <a href="http://github.com/linus-jansson" target="_blank" rel="noreferrer">here!</a></p>

                <p className="separator">Do you want to get in contact with me? Contact me on <a href="mailto:contact@limpan.dev">contact@limpan.dev</a> or on discord <a href="https://discord.com/users/322015089529978880">B1NUS#1994</a></p>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

export default About