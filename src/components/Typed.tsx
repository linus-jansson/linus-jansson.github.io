"use client";
import typedJs from 'typed.js';

import { useRef, useEffect } from "react";

export default function TypedText({ stringArry }: { stringArry: string[] }) {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;
        const TypedOptions = {
            strings: stringArry || [""],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            contentType: 'null',
            loop: true,
            cursorChar: '_'

        }

        const typed = new typedJs(TypedElement.current, TypedOptions);

        // Destroy typed when unmounted
        return () => typed.destroy();
    }, []);

    return <span ref={TypedElement}></span>
}


export function useTyped({ stringArry }: { stringArry: string[] }) {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;
        const TypedOptions = {
            strings: stringArry || [""],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 500,
            contentType: 'null',
            loop: true,
            cursorChar: '_'

        }

        const typed = new typedJs(TypedElement.current, TypedOptions);

        // Destroy typed when unmounted
        return () => typed.destroy();
    }, []);

    return TypedElement;
}