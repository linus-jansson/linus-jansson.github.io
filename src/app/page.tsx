import Header from '../components/index/Header'
import PortfolioSection from '../components/index/Portfolio'

export default function IndexPage() {

    return (
        <>
            {/* Mobile Navbar */}
            <div className='sticky top-0 z-50 flex flex-row justify-around w-screen p-4 shadow-2xl md:hidden bg-rose-700 xs:flex-col'>
                <a href="#start" className='font-bold tracking-widest uppercase duration-100 text-slate-100 hover:text-slate-300 hover:underline'>About Me</a>
                <a href="#projects" className='font-bold tracking-widest uppercase duration-100 text-slate-100 hover:text-slate-400 hover:underline'>Projects</a>
                <a href="#timeline" className='font-bold tracking-widest uppercase duration-100 text-slate-100 hover:text-slate-400 hover:underline'>Timeline</a>
            </div>
            <div id='start' className='flex flex-col pt-4 scroll-mt-12 lg:flex-row'>
                {/* Sidebar with links and about text */}
                <Header />
                <div className='px-4 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full md:w-1/2 flex flex-col max-w-[1024px] justify-center'>
                    {/* Projects section */}
                    <PortfolioSection />
                </div>
            </div>

            {/* Dark blur effect */}
            <div className='fixed bottom-0 left-0 w-screen h-6 bg-black/90 blur-lg'></div>

        </>
    )
}
