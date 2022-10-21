const Socials = (props) => {
    const github = "https://www.github.com/linus-jansson"
    const linkedin = "https://www.linkedin.com/in/linus-jansson-94715924a/"
    const discord = "https://discord.com/users/322015089529978880"
    const mail = "mailto:contact@limpan.dev"
    console.log(props)

    let icon_color = (props.dark) ? "text-textSecondary" : "text-textPrimary";

    return (
        <ul className="flex flex-row">
            <li className="m-3 hover:shadow-xl"><a href={github}><i className={icon_color + " fa fa-github"} style={{ fontSize: props.size + 'em' }}></i></a></li>
            <li className="m-3 hover:shadow-xl"><a href={linkedin}><i className={icon_color + " fa fa-linkedin"} style={{ fontSize: props.size + 'em' }}></i></a></li>
            <li className="m-3 hover:shadow-xl"><a href={discord}><i className={icon_color + " fa-brands fa-discord"} style={{ fontSize: props.size + 'em' }}></i></a></li>
            <li className="m-3 hover:shadow-xl"><a href={mail}><i className={icon_color + " fa fa-envelope"} style={{ fontSize: props.size + 'em' }}></i></a></li>
        </ul>
    )
}

export default Socials