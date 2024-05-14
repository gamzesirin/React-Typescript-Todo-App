import React from 'react'
import styles from '../styles/TodoInput.module.css'

interface TodoInputProps {
	todo: string
	setTodo: React.Dispatch<React.SetStateAction<string>>
	addFunc: (e: React.FormEvent) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ todo, setTodo, addFunc }) => {
	return (
		<div className="todo-input-container">
			<form className="todo-form" onSubmit={(e) => addFunc(e)}>
				<input
					className={styles.todoInput}
					type="text"
					name="todo"
					id="todo"
					placeholder="Todo write"
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value)
					}}
				/>
				<button className={styles.todoButton} type="submit">
					Add Todo
				</button>
			</form>
		</div>
	)
}

export default TodoInput
