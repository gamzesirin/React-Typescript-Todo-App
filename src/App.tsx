import React, { useState } from 'react'

import { ITypes } from './types/ITypes'
import TodoInput from './components/TodoInput'
import TodoResponse from './components/TodoResponse'
import styles from './App.module.css'

function App() {
	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<ITypes[]>([])

	const addFunc = (e: React.FormEvent) => {
		e.preventDefault()
		if (todo.length > 0) {
			setTodos((prev) => [...prev, { todo: todo, id: todos.length + 1, isColor: false }])
			setTodo('')
		}
	}

	return (
		<div className={styles.appContainer}>
			<h1 className={styles.appTitle}>Todo List</h1>
			<TodoInput todo={todo} setTodo={setTodo} addFunc={addFunc} />
			<TodoResponse todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App
