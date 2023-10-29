import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from '@/Setup/Providers/ReactQueryProvider'
import NextuiProvider from '@/Setup/Providers/NextuiProvider'
import NavbarComponent from './Components/NavbarComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Todo-App',
	description: 'Best Todo App on the Internet',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} min-h-screen`}>
				<ReactQueryProvider>
					<NextuiProvider>
						<NavbarComponent />
						{children}
					</NextuiProvider>
				</ReactQueryProvider>
			</body>
		</html>
	)
}
