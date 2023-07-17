import React, { Suspense } from 'react'
import Form from './addTodoForm'
import { TodoItem } from '@/components/ServerComponent'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Todos from './todos'




const page = async () => {

  const token = cookies().get("token")?.value;
  // if (!token) return redirect('/login')






  return (
    <div className='container'>
      <Form />
      <Suspense fallback={<div>Loading....</div>}>

        <Todos />
      </Suspense>

    </div>
  )
}

export default page
