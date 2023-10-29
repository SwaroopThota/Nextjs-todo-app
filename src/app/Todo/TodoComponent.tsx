import { FC } from 'react'
import SubmitButton from '../Components/Util/SubmitButton'
import { Checkbox } from '@nextui-org/react'

interface TodoComponentProps {
	todo: Todo
}

const deleteTodo = async (id: string) => {
	console.log('Deleting Todo with id ', id)
}

const setTodoCompleteStatus = async (id: string, status: boolean) => {
	console.log(
		`Setting Todo status to ${
			status ? 'Completed' : 'Incomplete'
		} with id ${id}`
	)
}

const TodoComponent: FC<TodoComponentProps> = ({ todo }) => {
	const isEdit = false
	return (
		<form className='p-3 rounded-lg flex cursor-pointer items-center hover:bg-gray-800 transition-colors-opacity'>
			{isEdit && <></>}
			{!isEdit && (
				<>
					<Checkbox
						as={SubmitButton}
						className='bg-transparent'
						disableRipple
						isSelected={todo.isCompleted}
						lineThrough
						size='lg'
						formAction={async () => {
							'use server'
							setTodoCompleteStatus(todo.id, !todo.isCompleted)
						}}
					>
						{todo.content}
					</Checkbox>
					<SubmitButton
						color='danger'
						variant='bordered'
						className='ml-auto'
						formAction={async () => {
							'use server'
							deleteTodo(todo.id)
						}}
					>
						Delete
					</SubmitButton>
				</>
			)}
		</form>
	)
}

export default TodoComponent
