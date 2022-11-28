import Header from '../components/index/Header'
import PortfolioSection from '../components/index/Portfolio'
import TimelineSection from '../components/index/Timeline'

export default function IndexPage() {

    return (
        <>
            {/* Mobile Navbar */}
            <div className='md:hidden z-50 sticky shadow-2xl w-screen top-0 bg-rose-700 p-4 flex flex-row justify-around xs:flex-col'>
                <a href="#start" className='text-slate-100 hover:text-slate-300 duration-100 font-bold uppercase tracking-widest hover:underline'>About Me</a>
                <a href="#projects" className='text-slate-100 hover:text-slate-400 duration-100 font-bold uppercase tracking-widest hover:underline'>Projects</a>
                <a href="#timeline" className='text-slate-100 hover:text-slate-400 duration-100 font-bold uppercase tracking-widest hover:underline'>Timeline</a>
            </div>
            <div id='start' className='scroll-mt-12 flex flex-col lg:flex-row pt-4'>
                {/* Sidebar with links and about text */}
                <Header />
                <div className='px-4 md:ml-auto md:pr-24 md:pl-48 md:pt-24 mb-12 w-full md:w-1/2 flex flex-col max-w-[1024px] justify-center'>
                    {/* Projects section */}
                    <PortfolioSection />
                    {/* Timeline section */}
                    <TimelineSection />
                </div>
            </div>

            {/* Dark blur effect */}
            <div className='fixed bottom-0 left-0 w-screen bg-black/90 blur-lg h-6'></div>

        </>
    )
}
