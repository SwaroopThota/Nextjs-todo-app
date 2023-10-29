'use client'

import { NextUIProvider } from '@nextui-org/react'
import { FC } from 'react'

interface NextuiProviderProps {
	children: React.ReactNode
}

const NextuiProvider: FC<NextuiProviderProps> = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>
}

export default NextuiProvider
