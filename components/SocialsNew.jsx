const Socials = (props) => {
    const github = "https://www.github.com/linus-jansson"
    const linkedin = "https://www.linkedin.com/in/linus-jansson-94715924a/"
    const discord = "https://discord.com/users/322015089529978880"
    const mail = "mailto:contact@limpan.dev"


    return (
        <ul className="flex flex-row">
            <li className="m-3"><a href={github}><i className="text-textPrimary fa fa-github" style={{fontSize: props.size + 'em'}}></i></a></li>
            <li className="m-3"><a href={linkedin}><i className="text-textPrimary fa fa-linkedin" style={{fontSize: props.size + 'em'}}></i></a></li>
            <li className="m-3"><a href={discord}><i className="text-textPrimary fa-brands fa-discord" style={{fontSize: props.size + 'em'}}></i></a></li>
            <li className="m-3"><a href={mail}><i className="text-textPrimary fa fa-envelope" style={{fontSize: props.size + 'em'}}></i></a></li>
        </ul>
    )
}

export default Socials