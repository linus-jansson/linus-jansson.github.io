
import RubberBand from './components/RubberBandText'
import Projects from './Projects'

function Bread() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-baguette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841z"></path>
    <path d="M9.5 7.5l1.5 3.5"></path>
    <path d="M6.5 10.5l1.5 3.5"></path>
    <path d="M12.5 4.5l1.5 3.5"></path></svg>
    )
}

export default function Home() {
    return (
        <>  
            <header className='bg-black'>
                <ul className="flex justify-evenly">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">About Me</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Projects</a></li>
                    <li><a href="mailto:contact@limpan.dev" target="_blank" rel="noopener noreferrer">Contact</a></li>
                </ul>
            </header>
            <main className='m-4 '>
                <section>
                    <h1 className="text-3xl font-bold"><RubberBand>Hey I'm Linus</RubberBand>, a {new Date().getFullYear() - 2003} year old guy from Sweden</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae voluptates velit eveniet eius, dolore odit! Dignissimos dolorum dolor quasi et! Quis, ipsa sequi facilis fuga sit accusamus asperiores voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae voluptates velit eveniet eius, dolore odit! Dignissimos dolorum dolor quasi et! Quis, ipsa sequi facilis fuga sit accusamus asperiores voluptatem.</p>
                </section>
                <Projects/>

                <span className='block font-thin text-center opacity-70'>want to hire me? <a href="mailto:contact@limpan.dev" className='underline'>Hit me up!</a></span>
            </main>
            <footer className='flex flex-col items-center w-full p-2 mt-auto bg-slate-500'>
                <ul className="flex w-full p-2 uppercase justify-evenly">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="mailto:contact@limpan.dev" target="_blank" rel="noopener noreferrer">Mail</a></li>
                </ul>
                <p className='flex font-thin text-center gap-x-1'><a href='https://github.com/linus-jansson/linus-jansson.github.io' className='underline'>Copyright</a> {new Date().getFullYear()} <span className='inline-flex flex-wrap nowrap'><Bread/>Linus J</span></p>
            </footer>
        </>
    )
}
