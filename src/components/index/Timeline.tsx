import styles from '../../styles/index/Timeline.module.css'

const TimelineCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                {children}
            </div>
        </div>
    )
}

const TimelineSection = () => {
    return (
        <>
            <div id='timeline' className='p-12'>
                <h1 className='text-slate-100 text-3xl font-bold uppercase text-center tracking-widest'>My Timeline</h1>
                <div>
                    <TimelineCard title="Teknikprogrammet (TE)">
                        <p>I went to NTI-gymnasiet, a high school which has its focus in tech from where I graduated in June 2022.</p>
                    </TimelineCard>
                    <TimelineCard title="Gymnasieingenjör (T4)">
                        <p>I am currently studying to become a <i>"Gymnasieingenjör"</i> at NTI-gymnasiet, an additional year to high school which prepares me to work in software development.</p>
                    </TimelineCard>
                </div>
                <p className='text-center text-zinc-600 font-thin'>Want to Hire me? <a href='mailto:contact@limpan.dev' className='underline'>Hit me up!</a></p>
            </div>
        </>
    )
}


export default TimelineSection;