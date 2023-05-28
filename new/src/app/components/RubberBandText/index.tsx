import textStyles from './RubberBand.module.css'

export default function RubberBand({children} : {children: string}) {
    /* Split each character into a span and put each word in a div*/
    const words = children.split(' ')
    const len = words.length
    return (
        <span className={textStyles.wrapper}>{
            words.map((word, wordIdx) => {
                const wordLen = word.length;
                return (
                        word.split('')
                            .map((char, charIdx) => 
                                /* Add a bit of margin after the last char */
                                (wordLen == charIdx + 1 && len != wordIdx +1) ? 
                                    <span key={char + charIdx} className={textStyles.bouncy + ' mr-2'}>{char}</span> :
                                    <span key={char + charIdx} className={textStyles.bouncy}>{char}</span>
                            )
                )
            })}
        </span>
    )
}