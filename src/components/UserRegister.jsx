import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserRegister = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/user/v1/register`,
                {
                    name,
                    email,
                    password,
                }
            );
            if (res.data.success) {
                navigate("/home")
            }

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='flex items-center justify-center flex-col  pt-5 gap-4'>
            <h1 className="font-semibold mb-4">User Registration Form</h1>

            <form
                onSubmit={handleSubmitForm}
                className="flex justify-center items-center flex-col gap-4"
            >
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='rounded-md p-1'
                    placeholder='Enter your name' />

                <input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='rounded-md p-1'
                    placeholder='Email' />

                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='rounded-md p-1'
                    placeholder='Password' />

                <button className='bg-blue-600 px-4 rounded-lg hover:bg-blue-500'>Submit</button>
            </form>
            <p className="">If you have already register <Link href="/login" className='text-blue-600 cursor-pointer border-b-2'>log-in</Link></p>
        </div>
    )
}

export default UserRegister