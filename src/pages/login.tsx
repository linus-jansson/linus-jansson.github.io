import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const Login = () => {
    const Router = useRouter()

    const loginRedirect = () => {
        axios.get('/api/login').then((res) => {
            Router.push(res.data.url)
        })
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="bg-slate-100 w-80 h-80 flex justify-around items-center flex-col rounded-lg">
                <h1 className='text-3xl font-bold'>Login Page</h1>
                <button onClick={loginRedirect} type='submit' className='p-1 rounded-lg bg-[#738adb] uppercase font-bold hover:shadow-lg duration-100'>
                    <i className="fa-brands fa-discord"></i>
                    Login using Discord
                </button>
            </div>
        </div>
    )
}

export default Login;