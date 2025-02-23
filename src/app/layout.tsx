import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { AnimationProvider } from './providers'
import { MainWrapper } from './main-wrapper/ui'

const comfortaa = Comfortaa({
	variable: '--font-comfortaa',
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: 'AVideo',
	description: 'Webapp for watching movies and TV series'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={comfortaa.variable}>
				<AnimationProvider>
					<MainWrapper>{children}</MainWrapper>
				</AnimationProvider>
			</body>
		</html>
	)
}
