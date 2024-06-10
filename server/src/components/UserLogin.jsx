import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/v1/login`, { email, password })
            if (res.data.success) {
                navigate("/home")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex items-center justify-center flex-col  pt-5 gap-4'>
            <h1 className="font-semibold mb-4">Login User</h1>

            <form
                onSubmit={handleLogin}
                className="flex justify-center items-center flex-col gap-4"
            >
                <input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='rounded-md p-1'
                    placeholder='Email' />

                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='rounded-md p-1'
                    placeholder='Password' />

                <button className='bg-blue-600 px-4 rounded-lg hover:bg-blue-500'>Login</button>
            </form>

            <p className="">If you don't register <Link to="/register" className='text-blue-600 cursor-pointer border-b-2'>Register</Link></p>
        </div>
    )
}

export default UserLogin