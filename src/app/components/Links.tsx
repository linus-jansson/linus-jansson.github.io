export function FloatingIconLink({href, children}: {href: string, children: React.ReactNode}) {
    return (
        <li className='text-zinc-100 text-xs font-bold tracking-widest uppercase'>
            <a href={href} className='duration-100 items-center flex flex-col'>{children}</a>
        </li>
    )
}

export function VIconLink({href, children}: {href: string, children: React.ReactNode}) {
    return (
        <li className='text-zinc-100 text-xs font-bold tracking-widest uppercase'>
            <a href={href}
                className='duration-100 hover:text-zinc-400 hover:shadow-[0_2px_0_0_currentcolor] items-center flex flex-col'
            >
                {children}
            </a>
        </li>
    )
}

export function HIconLink({href, text, children}: {href: string, text: string, children: React.ReactNode}) {
    return (
        <li className='text-zinc-100 font-bold tracking-widest uppercase'>
            <a href={href}
                className='duration-100 hover:text-zinc-400 md:hover:shadow-[0_2px_0_0_currentcolor] items-center flex'
            >
                {children}

                <span className="ml-3">
                    {text}
                </span>
            </a>
        </li>
    )
}

