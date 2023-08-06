"use client";

import { useState } from "react";

function SettingsMenu({ settings, dispatch } 
    : {
        settings: { maxRotation: number, perspective: number }, 
        dispatch: ({type, value} : {type:string, value:number}) => void
    }) {
    return (
        <div className="flex flex-col p-2 mt-2 bg-gray-800 rounded-lg shadow-lg ">
            <label className="font-bold text-white">Perspective</label>
            <input type="number" className="mb-2" value={settings.perspective} onChange={(e) => dispatch({ type:"perspectiveChange", value: parseInt(e.target.value, 10) || 0 })} />
            <label className="font-bold text-white">Max Rotation</label>
            <input type="number" value={settings.maxRotation} onChange={(e) => dispatch({ type:"maxRotationChange", value: parseInt(e.target.value, 10) || 0 })} />
        </div>
    )
}

export default function SettingsButton(
    { settings, dispatch } 
    : {
        settings: { maxRotation: number, perspective: number }, 
        dispatch: ({type, value} : {type:string, value:number}) => void
    }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute z-10 top-1 left-1">
            <button 
                className="p-4 text-white duration-150 rounded-lg shadow-lg bg-gray-800/75 hover:shadow-2xl"
                onClick={() => {setIsOpen(previous => !previous)}}
            >
                Settings
            </button>
            {isOpen && <SettingsMenu settings={settings} dispatch={dispatch} />}
        </div>
    )
}