import Socials from './Socials'

const Footer = (props) => {
    return (
        <div id="footer" className="bg-primary text-center w-screen flex justify-center flex-col pt-12 pb-12 drop-shadow-xl">
            <div className="flex justify-center mb-10">
                <Socials dark={true} size="1.5" />
            </div>

            <p>&copy; Copyrights. All rights reserved.</p>
        </div>
    )
}

export default Footer