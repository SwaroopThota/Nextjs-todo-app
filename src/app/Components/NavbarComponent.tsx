import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Button,
} from '@nextui-org/react'
import { FC } from 'react'

interface NavbarComponentProps {}

const NavbarComponent: FC<NavbarComponentProps> = ({}) => {
	return (
		<Navbar shouldHideOnScroll>
			<NavbarBrand>
				<p className='text-2xl font-semibold'>Todo App</p>
			</NavbarBrand>
			<NavbarContent justify='end'>
				<NavbarItem>
					<Button color='primary'>Login</Button>
				</NavbarItem>
				<NavbarItem>
					<Button color='default'>Logout</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}

export default NavbarComponent
