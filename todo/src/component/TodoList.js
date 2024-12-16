import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([]) //todo 데이터 저장

  // 할 일 추가 함수
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)
  }

  // 할 일 삭제 함수
  const removeTodo = id => {
    const removedArr = todos.filter(todo => todo.id !== id)
    setTodos(removedArr)
  }

  // 할 일 수정 함수
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  // 할 일 완료 함수
  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    console.log('complete')
    setTodos(updateTodos)
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo
        todos={todos} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo}
        completeTodo={completeTodo} 
      ></Todo>
    </div>
  )
}

export default TodoList