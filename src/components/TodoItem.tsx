import { FC } from 'react'
import { ITodos } from '../types/types'

interface TodoItemPropc {
  todo: ITodos
}

const TodoItem: FC<TodoItemPropc> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}.{todo.title}
    </div>
  )
}

export default TodoItem
