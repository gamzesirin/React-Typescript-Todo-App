import { ITypes } from '../types/ITypes'
import React from 'react'
import styles from '../styles/TodoResponse.module.css'

interface TodoResponseProps {
	todos: ITypes[]
	setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>
}

const TodoResponse: React.FC<TodoResponseProps> = ({ todos, setTodos }) => {
	const updateFunc = (id: number) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isColor: !todo.isColor }
				}
				return todo
			})
		)
	}
	return (
		<div>
			{todos &&
				todos.map((todo, i) => {
					return (
						<div className={styles.todoItem} key={i}>
							<h1 className={styles.todoText} style={todo.isColor ? { color: 'red' } : { color: '' }}>
								{todo.todo}
							</h1>
							<div className={styles.todoButtons}>
								<button
									className={styles.deleteButton}
									onClick={() => {
										setTodos(todos.filter((t) => t.id !== todo.id))
									}}
								>
									Delete
								</button>
								<button className={styles.colorButton} onClick={() => updateFunc(todo.id)}>
									Color it
								</button>
							</div>
						</div>
					)
				})}
		</div>
	)
}

export default TodoResponse
