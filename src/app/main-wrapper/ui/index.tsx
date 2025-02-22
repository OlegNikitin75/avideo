import { PropsWithChildren } from 'react'
import { UiHeader } from '@/shared/ui'

export const MainWrapper = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<div className='px-6'>
			<UiHeader />
			{children}
		</div>
	)
}
