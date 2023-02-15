"use client";
import { useRef, useReducer } from "react";
import type { MouseEvent } from "react";

import SettingsButton from "./Settings";

const initialSettings = {
    perspective: 1000,
    maxRotation: 45
}

const SettingsReducer = (state: any, action: any) => {
    switch (action.type) {
        case "perspectiveChange":
            return {
                ...state,
                perspective: action.value
            }
        case "maxRotationChange":
            return {
                ...state,
                maxRotation: action.value
            }
        default:
            throw new Error("Invalid action Type");
    }
}

export default function MainCard() {
    const elementRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [settings, dispatch] = useReducer(SettingsReducer, initialSettings);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!elementRef.current || !wrapperRef.current) return;

        /* Could be changable values */
        const perspective = settings.perspective;
        const maxRotate = settings.maxRotation;
        /* */
        

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        if (typeof window === 'undefined') return;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        /* 
            Calculate rotation degree x&y depending on normalized 
            mouse coords relative to window width, height
        */
        const offsetX = (mouseX - (windowWidth/2)) / (windowWidth) * maxRotate;
        const offsetY = (mouseY - (windowHeight/2)) / (windowHeight) * maxRotate;
        
        /* Set style transform */
        elementRef.current.style.transform = `perspective(${perspective}px)  rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
    }
    const handleMouseLeave = () => {
        /* Reset rotation of card if mouse is leaving window */
        if (!elementRef.current) return;
        elementRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }

    return (
        <div className="grid h-screen place-items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={wrapperRef}
            
        >
            <SettingsButton settings={settings} dispatch={dispatch} />
            <div 
                ref={elementRef} 
                className="h-64 p-4 transition duration-300 bg-gray-800 rounded-lg shadow-2xl w-96"
            >
                <p className="text-white">Some content</p>
            </div>
        </div>
    )
}