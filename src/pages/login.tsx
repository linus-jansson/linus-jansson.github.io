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
        <div className="w-screen h-screen flex justify-center">
            <div className="w-12 h-12">
                <button onClick={loginRedirect}>Login Button</button>
            </div>
        </div>

    )
}

export default Login;