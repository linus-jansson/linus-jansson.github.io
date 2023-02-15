"use client";

import { useState } from "react";

function SettingsMenu({ settings, dispatch } 
    : {
        settings: { maxRotation: number, perspective: number }, 
        dispatch: ({type, value} : {type:string, value:number}) => void
    }) {
    return (
        <div className="flex flex-col">
            <label className="text-white" htmlFor="">Perspective</label>
            <input type="number" name=""  className="mb-2" value={settings.perspective} onChange={(e) => dispatch({ type:"perspectiveChange", value: e.target.value })} />
            <label className="text-white"htmlFor="">Max Rotation</label>
            <input type="number" name="" value={settings.maxRotation} onChange={(e) => dispatch({ type:"maxRotationChange", value: e.target.value })} />
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
                className="p-4 text-white bg-gray-800 rounded-lg shadow-lg"
                onClick={() => {setIsOpen(previous => !previous)}}
            >
                Settings
            </button>
            {isOpen && <SettingsMenu settings={settings} dispatch={dispatch} />}
        </div>
    )
}