import { FC } from 'react'
import TodoInputComponent from './Todo/TodoInputComponent'
import TodoStackComponent from './Todo/TodoStackComponent'

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	return (
		<main className='max-w-2xl mx-auto p-6'>
			<TodoInputComponent />
			<TodoStackComponent />
		</main>
	)
}

export default Home
