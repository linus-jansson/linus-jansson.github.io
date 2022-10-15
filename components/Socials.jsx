const Socials = (props) => {
    const github = "https://www.github.com/linus-jansson"
    const linkedin = "https://www.linkedin.com/in/linus-jansson-94715924a/"
    const discord = "https://discord.com/users/322015089529978880"
    const mail = "mailto:contact@limpan.dev"


    return (
        <>
            <li><a href={github}><i className="fa fa-github" style={{fontSize: props.size + 'em'}}></i></a></li>
            <li><a href={linkedin}><i className="fa fa-linkedin" style={{fontSize: props.size + 'em'}}></i></a></li>
            <li><a href={discord}><i className="fa-brands fa-discord" style={{fontSize: props.size + 'em'}}></i></a></li>
            <li><a href={mail}><i className="fa fa-envelope" style={{fontSize: props.size + 'em'}}></i></a></li>
        </>
    )
}

export default Socials