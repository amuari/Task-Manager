import { useState, useRef, useEffect } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import Task from './Task'

const Todo = () => {
  const myRef = useRef(null)
  const [todo, setTodo] = useState('')
  const [date, setDate] = useState('')
  const [tasks, setTasks] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if ((!todo && !date) || !todo || !date === '') {
      alert('task empty')
    } else {
      const newTask = {
        id: Date.now(),
        todo: todo,
        date: date,
      }
      setTasks([...tasks, newTask])
      setTodo('')
      setDate('')
    }
  }
  const handleDelete = (id) => {
    const clear = tasks.filter((task) => task.id !== id)
    setTasks(clear)
    console.log('clicked')
  }
  const clearAll = () => {
    setTasks('')
  }
  useEffect(() => {
    myRef.current.focus()
  }, [])

  return (
    <div>
      <h1 className='font-bold py-4'>Task Manager</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Task</label>
          <input
            ref={myRef}
            placeholder='Task'
            name='todo'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input
            type='date'
            name='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>

      <div>
        <h1>Task List</h1>
        <hr />
        {tasks.length === 0 ? (
          'Task List Empty'
        ) : (
          <div>
            {tasks.map((task) => (
              <Task {...task} handleDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
      <button
        className='border-2 bg-gray-400 rounded-lg p-1 hover:animate-bounce hover:bg-red-500'
        onClick={clearAll}
      >
        clear all
      </button>
    </div>
  )
}

export default Todo
