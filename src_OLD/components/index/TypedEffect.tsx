"use client";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

const TypedEffect = ({stringArry}: {stringArry: string[]}) => {
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

        const typed = new Typed(TypedElement.current, TypedOptions);

        // Destroy typed when unmounted
        return () => typed.destroy();
    }, []);

    return <span ref={TypedElement}></span>
}

export default TypedEffect;