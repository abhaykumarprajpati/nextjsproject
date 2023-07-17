'use client'


import React, { useState ,useContext} from 'react';
import Link from 'next/link';
import { Context } from '@/components/Client';
import {redirect} from 'next/navigation'
import { toast } from 'react-hot-toast';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user,setUser}=useContext(Context)
  console.log('user',user)
  

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      
      if(!data.success) return toast.error(data.message)
        setUser(data.user)
        toast.success(data.message)
      
    } catch (error) {
      return toast.error(error.message)
      
    }
  };


  if(user._id) return redirect('/')

  return (
    <div
      className="login"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
      }}
    >
      <section
        style={{
          width: '300px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          filter: 'grayscale(100%)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            color: '#000',
          }}
        >
          Login
        </h2>
        <form onSubmit={loginHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #000',
              filter: 'grayscale(100%)',
            }}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '4px',
              border: '1px solid #000',
              filter: 'grayscale(100%)',
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#000',
              color: '#fff',
              cursor: 'pointer',
              filter: 'grayscale(100%)',
            }}
          >
            Login
          </button>
          <p
            style={{
              textAlign: 'center',
              marginTop: '20px',
              marginBottom: '10px',
              color: '#000',
            }}
          >
            Or
          </p>
          <Link href="/register">
            <div
              style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#000',
                cursor: 'pointer',
              }}
            >
              New User
            </div>
          </Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: 'Login',
  description: 'Login for Next.js',
};

export default Page;
