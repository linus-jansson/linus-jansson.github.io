"use client";
import { useRef, useReducer, useState } from "react";
import type { MouseEvent } from "react";
import { FaGithub, FaEnvelope } from 'react-icons/fa';

import TypedEffect from "@/components/Typed";
import Socials from "@/components/Social";

const initialSettings = {
    perspective: 1000,
    maxRotation: 45
}

function SettingsMenu({ settings, dispatch }
    : {
        settings: { maxRotation: number, perspective: number },
        dispatch: ({ type, value }: { type: string, value: number }) => void
    }) {
    return (
        <div className="flex flex-col p-2 mt-2 bg-gray-800 rounded-lg shadow-lg ">
            <label className="font-bold text-white">Perspective</label>
            <input type="number" className="mb-2" value={settings.perspective} onChange={(e) => dispatch({ type: "perspectiveChange", value: parseInt(e.target.value, 10) || 0 })} />
            <label className="font-bold text-white">Max Rotation</label>
            <input type="number" value={settings.maxRotation} onChange={(e) => dispatch({ type: "maxRotationChange", value: parseInt(e.target.value, 10) || 0 })} />
        </div>
    )
}

function SettingsButton(
    { settings, dispatch }
        : {
            settings: { maxRotation: number, perspective: number },
            dispatch: ({ type, value }: { type: string, value: number }) => void
        }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute z-10 top-1 left-1">
            <button
                className="p-4 text-white duration-150 rounded-lg shadow-lg bg-gray-800/75 hover:shadow-2xl"
                onClick={() => { setIsOpen(previous => !previous) }}
            >
                Settings
            </button>
            {isOpen && <SettingsMenu settings={settings} dispatch={dispatch} />}
        </div>
    )
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
    const [animationId, SetAnimationId] = useState<number | null>(null);
    const [settings, dispatch] = useReducer(SettingsReducer, initialSettings);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        // return to avoid runtime error if elements arent rendered or window is undefined
        if (!elementRef.current ||
            !wrapperRef.current ||
            typeof window === 'undefined') return;

        /* User changable values*/
        const perspective = settings.perspective;
        const maxRotate = settings.maxRotation;
        /**/

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        /* 
            Calculate rotation degree x&y depending on normalized 
            mouse coords relative to window width, height
        */

        const x_norm = (mouseX - (windowWidth / 2)) / (windowWidth)
        const y_norm = (mouseY - (windowHeight / 2)) / (windowHeight)
        const offsetX = x_norm * maxRotate;
        const offsetY = y_norm * maxRotate;
        // perspective = Math.random() * 1000 + 10000;

        let scaleY = Math.max(1, Math.abs(x_norm * 4))
        let scaleX = Math.max(1, Math.abs(y_norm * 4))

        /* Set style transform */
        elementRef.current.style.transform = `perspective(${perspective}px)  rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
        elementRef.current.style.transition = 'none';
        // elementRef.current.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) perspective(${perspective}px)  rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;

        // const animationID = requestAnimationFrame(() => handleMouseMove(e));
        // SetAnimationId(animationID);

    }
    const handleMouseLeave = () => {
        /* Reset rotation of card if mouse is leaving window */
        if (!elementRef.current) return;
        console.log("Mouse left window")
        // cancelAnimationFrame(animationId as number);
        elementRef.current.style.transform = 'none';
        elementRef.current.style.transition = 'transform 0.75s ease';
    }

    return (
        <div className="grid h-screen place-items-center bg-gradient-to-br from-fuchsia-500/25 to-cyan-500/25"
            onPointerMove={handleMouseMove}
            onPointerUp={handleMouseLeave}
            onPointerCancel={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={wrapperRef}

        >
            <SettingsButton settings={settings} dispatch={dispatch} />
            <div
                ref={elementRef}
                className="p-4 m-4 rounded-lg shadow-2xl md:w-1/3 bg-gray-800/75"
            >
                <div className="flex flex-col justify-around h-full">
                    <h1 className="text-3xl font-bold text-white"><TypedEffect stringArry={["ABC", "XYZ", "123"]} /></h1>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col text-white md:w-1/2">
                            <p className='font-bold text-slate-200 md:py-1'>I'm a {new Date().getFullYear() - 2003}yr old software developer from Sweden!</p>
                            <p className='font-thinner text-zinc-300 md:py-3'>
                                I started my software development journey back in 2015 by making personal websites for game servers I was playing around with. Software development is in the family so naturally I got a passion for it. I am currently studying at NTI-gymnasiet, a high school which has tech in focus, where I specialize in software development and software design.
                            </p>
                        </div>
                        <></>
                    </div>
                    <ul className="flex mt-2 text-white justify-evenly">
                        <Socials link="https://www.github.com/linus-jansson" icon={FaGithub} icontext='Github' />
                        <Socials link="mailto:contact@limpan.dev" icon={FaEnvelope} icontext='Mail Me' />
                    </ul>
                </div>
            </div>
        </div>
    )
}