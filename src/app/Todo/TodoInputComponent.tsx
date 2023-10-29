import { Input } from '@nextui-org/react'
import { revalidatePath } from 'next/cache'
import { FC } from 'react'

interface TodoInputComponentProps {}

const AddTodo = async (formData: FormData) => {
	'use server'
	await new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log(formData.get('todo'))
			resolve({ success: true })
		}, 2000)
	)
	revalidatePath('/')
}

const TodoInputComponent: FC<TodoInputComponentProps> = ({}) => {
	return (
		<form
			action={AddTodo}
			className='flex'
		>
			<Input
				name='todo'
				variant='faded'
				placeholder='Add a Todo...'
				className='rounded-r-none'
				size='lg'
				required
			/>
		</form>
	)
}

export default TodoInputComponent
