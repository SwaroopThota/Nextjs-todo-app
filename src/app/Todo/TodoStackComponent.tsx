import { todo } from 'node:test'
import { FC } from 'react'
import TodoComponent from './TodoComponent'

interface TodoStackComponentProps {}

const TodoStackComponent: FC<TodoStackComponentProps> = ({}) => {
	const todos: Todo[] = [
		{
			id: '1',
			content: 'Go to Market',
			isCompleted: true,
		},
		{
			id: '2',
			content: 'Learn Next.js',
			isCompleted: true,
		},
		{
			id: '3',
			content: 'Learn .NET',
			isCompleted: false,
		},
	]
	return (
		<div>
			<h1 className='py-4 text-2xl text-center'>Your Todos</h1>
			<div className='flex flex-col'>
				{todos.map((todo) => (
					<TodoComponent
						todo={todo}
						key={todo.id}
					/>
				))}
			</div>
		</div>
	)
}

export default TodoStackComponent
