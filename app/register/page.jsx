'use client'


import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { Context } from '@/components/Client';
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast';

const Page = () => {
    const [registerDetails, setregisterdetails] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleregisterdetails = (e) => {
        const { name, value } = e.target
        setregisterdetails((prev) => ({
            ...prev,

            [name]: value
        }))
    }



    const { user, setUser } = useContext(Context)

    const registerHandler = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    name: registerDetails.name,
                    email: registerDetails.email,
                    password: registerDetails.password,


                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if (!data.success) return toast.error(data.message)
            setUser(data.user)
            toast.success(data.message)

        } catch (error) {
            return toast.error(error.message)

        }


    }


    if (user._id) return redirect('/')


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <section style={{ width: '400px', backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration</h1>
                <form action="" onSubmit={registerHandler}>
                    <input type="text" name="name" onChange={handleregisterdetails}
                        value={registerDetails.name} id="" placeholder='Enter name' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />



                    <input type="email" onChange={handleregisterdetails}
                        value={registerDetails.email} name="email" id="" placeholder='Enter email' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />


                    <input type="password" onChange={handleregisterdetails}
                        value={registerDetails.password} name="password" id="" placeholder='Enter password' style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />

                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
                    <p style={{ textAlign: 'center', margin: '10px 0' }}>OR</p>
                    <Link href="/login" passHref>
                        <button style={{ width: '100%', padding: '10px', backgroundColor: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Login</button>
                    </Link>
                </form>
            </section>
        </div>
    );
};

export const metadata = {
    title: 'Logout',
    description: 'Logout for Next.js',
};

export default Page;
