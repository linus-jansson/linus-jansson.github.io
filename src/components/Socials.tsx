import Link from 'next/link'
interface socialProps {
    dark: boolean,
    size: number
}

const Socials = (props: socialProps) => {
    const github = "https://www.github.com/linus-jansson"
    const linkedin = "https://www.linkedin.com/in/linus-jansson-94715924a/"
    const discord = "https://discord.com/users/322015089529978880"
    const mail = "mailto:contact@limpan.dev"

    let icon_color = (props.dark) ? "text-textSecondary" : "text-textPrimary";

    return (
        <ul className="flex flex-row">
            <li className="m-3 hover:shadow-xl"><Link href={github}><i className={icon_color + " fa fa-github"} style={{ fontSize: props.size + 'em' }}></i></Link></li>
            <li className="m-3 hover:shadow-xl"><Link href={linkedin}><i className={icon_color + " fa fa-linkedin"} style={{ fontSize: props.size + 'em' }}></i></Link></li>
            <li className="m-3 hover:shadow-xl"><Link href={discord}><i className={icon_color + " fa-brands fa-discord"} style={{ fontSize: props.size + 'em' }}></i></Link></li>
            <li className="m-3 hover:shadow-xl"><Link href={mail}><i className={icon_color + " fa fa-envelope"} style={{ fontSize: props.size + 'em' }}></i></Link></li>
        </ul>
    )
}

export default Socials