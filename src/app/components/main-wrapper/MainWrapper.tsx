import { PropsWithChildren } from 'react'
import { Header } from './header/Header'

export const MainWrapper = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
