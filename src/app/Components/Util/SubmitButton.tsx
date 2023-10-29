'use client'

import { ButtonProps, Button } from '@nextui-org/react'
import { FC } from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton: FC<ButtonProps> = ({ children, ...buttonProps }) => {
	const { pending } = useFormStatus()
	return (
		<Button
			type='submit'
			{...buttonProps}
			aria-disabled={pending}
		>
			{children}
		</Button>
	)
}

export default SubmitButton
