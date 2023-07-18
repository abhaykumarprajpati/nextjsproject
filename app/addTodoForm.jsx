
"use client";

import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';
import { Context } from '@/components/Client';

const AddTodoForm = () => {

  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  const { user } = useContext(Context)

  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/newtask', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      if (!data.success) return toast.error(data.message)

      toast.success(data.message)
      router.refresh()
      setdescription("")
      settitle("")
    } catch (error) {
      return toast.error(error)
    }

  }

  if (!user._id) {
    return redirect('/login')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '300px', margin: '20px' }}>
        <section style={{ border: '1px solid #ccc', padding: '20px' }}>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              name="title"
              onChange={(e) => settitle(e.target.value)}
              value={title}
              id=""
              placeholder="Enter task"
              style={{ marginBottom: '10px', width: '100%', padding: '5px' }}
            />
            <input
              type="text"
              name="description"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              id=""
              placeholder="Enter description"
              style={{ marginBottom: '10px', width: '100%', padding: '5px' }}
            />
            <button type="submit" style={{ width: '100%', padding: '10px' }}>
              Add Task please
            </button>
          </form>
        </section>
      </div>

    </div>

  )
}

export default AddTodoForm
