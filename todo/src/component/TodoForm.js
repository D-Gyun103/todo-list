import React, { useState } from 'react'

const TodoForm = props => { // props 안에는 onSubmit 함수가 들어가 있습니다.
  const [input, setInput] = useState('') // input에 입력한 값을 저장하기 위해서 useState를 이용해서 input 변수를 생성

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({ // 부모 컴포넌트에서 받아온 함수를 실행합니다. 부모 컴포넌트로 id, text 값이 넘어갑니다.
      id: Math.floor(Math.random() * 10000),
      text: input,
    })

    setInput('') // input 값을 초기화
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            name="text"
            className="todo-input edit"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button edit">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            className="todo-input"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  )
}

export default TodoForm;