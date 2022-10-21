const About = (props) => {
    return (
        <>
            <div id="" className="bg-primary flex justify-center pt-12 pb-12 ">
                <div className="max-w-2xl pr-5 pl-5">
                    <p className="text-3xl font-bold mb-10">About me</p>
                    <p className="text-sm sm:text-base mb-5 text-textSecondary">I&apos;m a {new Date().getFullYear() - 2003}yr old software developer from Sweden</p>
                    <p className="text-sm sm:text-base mb-5 text-textSecondary">I started development back in 2015 by making personal websites for game servers I was playing around with. Software development is in the familiy so naturally I got a passion for it. Later on I went to NTI-gymnasiet, a high school which has tech in focus, where I specialized in sofware development. Now I usually work on small projects on my spare time which are open-source and avaliable <a href="http://github.com/linus-jansson" target="_blank" rel="noreferrer">here!</a></p>

                    <p className="text-sm sm:text-base mb-5 text-textSecondary">Do you want to get in contact with me? Contact me on <a href="mailto:contact@limpan.dev" className="text-black">contact@limpan.dev</a> or on discord <a href="https://discord.com/users/322015089529978880" className="text-black">B1NUS#1994</a></p>

                </div>
            </div>
        </>

    )
}

export default About