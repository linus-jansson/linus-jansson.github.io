import styles from '../../styles/index/timeline.module.css'

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
                <h1 className='text-3xl font-bold tracking-widest text-center uppercase text-zinc-100'>My Timeline</h1>
                <div>
                    <TimelineCard title="Software developer at Uppsala Komnun">
                        <p>After my internship at Uppsala Kommun I got a fulltime job as a software developer.</p>
                    </TimelineCard>
                    <TimelineCard title="Gymnasieingenjör (T4)">
                        <p>I am currently studying to become a <i>&quot;Gymnasieingenjör&quot;</i> at NTI-gymnasiet, an additional year to high school which prepares me to work in software development.</p>
                    </TimelineCard>
                    <TimelineCard title="Teknikprogrammet (TE)">
                        <p>I went to NTI-gymnasiet, a high school which has its focus in tech from where I graduated in June 2022.</p>
                    </TimelineCard>
                </div>
                <p className='font-thin text-center text-zinc-600'>Want to Hire me? <a href='mailto:contact+portfolio@limpan.dev' className='underline'>Hit me up!</a></p>
            </div>
        </>
    )
}


export default TimelineSection;