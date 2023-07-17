import React from 'react'
import { TodoItem } from '@/components/ServerComponent'
import { cookies } from 'next/headers'


const fetchtodoitem = async (token) => {
  try {
    const res = await fetch(`${process.env.URL}/api/mytask`, {
      cache: 'no-cache',
      headers: {
        cookie: `token=${token}`
      }
    })
    const data = await res.json()
    console.log('test_datafetch', data)
    if (!data.success) return []

    return data.tasks
  } catch (error) {

    return []

  }
}

const Todos = async () => {

  const token = cookies().get("token")?.value;

  const tasks = await fetchtodoitem(token)



  return (
    <section className="todosContainer">
      {
        tasks?.map((i) => {
          return <TodoItem
            title={i.title}
            description={i.description}
            id={i._id}
            key={i._id}
            completed={i.isCompleted}

          />
        })
      }
    </section>

  )
}

export default Todos
