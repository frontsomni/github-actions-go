import {nanoid} from 'nanoid'
import { useState } from 'react'

export default function Todos() {
  const textArr = ['选项一', '选项二', '选项三']
  const _todos = textArr.map(text => ({
    name: text,
    id: nanoid()
  }))
  const [todos] = useState(_todos)
  return (
    <>
      <ul>
        {
          todos.map((todo) => {
            return Todo(todo)
          })
        }
      </ul>
    </>
  )
}


function Todo(todo) {
  return (
    <li key={todo.id}>
      <input type="checkbox" /> {todo.name}
    </li>
  )
}