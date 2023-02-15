"use client";
import { useRef, useReducer } from "react";
import type { MouseEvent } from "react";

import Image from "next/image";

import SettingsButton from "./Settings";
import TypedEffect from "../../../components/index/TypedEffect";

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
        let perspective = settings.perspective;
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

        const x_norm = (mouseX - (windowWidth/2)) / (windowWidth)
        const y_norm = (mouseY - (windowHeight/2)) / (windowHeight)
        const offsetX =  x_norm * maxRotate;
        const offsetY = y_norm * maxRotate;
        // perspective = Math.random() * 1000 + 10000;

        let scaleY = Math.max(1, Math.abs(x_norm*4))
        let scaleX = Math.max(1, Math.abs(y_norm*4))

        /* Set style transform */
        elementRef.current.style.transform = `perspective(${perspective}px)  rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
        elementRef.current.style.transition = 'none';
        // elementRef.current.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) perspective(${perspective}px)  rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
    }
    const handleMouseLeave = () => {
        /* Reset rotation of card if mouse is leaving window */
        if (!elementRef.current) return;
        elementRef.current.style.transform = 'none';
        elementRef.current.style.transition = 'transform 0.75s ease';
    }

    return (
        <div className="grid h-screen place-items-center bg-gradient-to-br from-fuchsia-500/50 to-cyan-500/50"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={wrapperRef}
            
        >
            <SettingsButton settings={settings} dispatch={dispatch} />
            <div 
                ref={elementRef} 
                className="w-1/4 p-4 rounded-lg shadow-2xl bg-gray-800/75"
            >   
                <div className="flex flex-col justify-around h-full">
                    <h1 className="text-3xl font-bold text-white"><TypedEffect stringArry={[ "ABC", "XYZ", "123"]} /></h1>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col w-1/2 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit voluptatem maxime quo facere mollitia soluta incidunt molestiae hic, vel, ipsum, eos minus sequi veritatis eveniet numquam. Perferendis, necessitatibus aperiam.
                        </div>
                        <div>
                            <div>
                                <Image
                                    height={175}
                                    width={175}
                                    alt="Picture of computer"
                                    src={"/images/background.jpg"}
                                />
                            </div>
                            <div>
                                <ul className="text-right text-white">
                                    <li className="mr-2">link 1</li>
                                    <li className="mr-2">link 2</li>
                                    <li className="mr-2">link 3</li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                    <ul className="flex text-white">
                        <li className="mr-2">linkIcon 1</li>
                        <li className="mr-2">linkIcon 2</li>
                        <li className="mr-2">linkIcon 3</li>

                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}