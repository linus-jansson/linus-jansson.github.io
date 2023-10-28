"use client";
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from 'grapheme-splitter';

const stringSplitter = (string: any): string => {
    const splitter = new GraphemeSplitter();
    console.log(splitter.splitGraphemes(string))
    // Orkar inte fixa detta rn
    // @ts-ignore
    return splitter.splitGraphemes(string);
};
  

export default function TypedEffect({stringArry, fallback}: {stringArry: string[], fallback?: string})
{
    return (
        <>
            <Typewriter 
                options={{
                    strings: stringArry || [""],
                    cursor: '_',
                    delay: 300,
                    loop: true,
                    autoStart: true,
                    stringSplitter,
                }}
            />
            <noscript>{fallback}</noscript>
        </>
    )
}