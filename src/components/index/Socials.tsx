export default function Socials(props: any) {
    return (
        <a href={props.link} target='_blank' className='pr-4 duration-100 text-slate-100 md:text-sm hover:text-rose-600 '>
            <span className='md:mr-2 md:inline-block md:align-middle'>
                <props.icon size="2em" />
            </span>
            <span className='hidden md:mr-2 md:inline-block md:align-middle'>
                {props.icontext}
            </span>
        </a>
    )
}
