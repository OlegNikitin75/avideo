import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import clsx from 'clsx'

type UiButtonVariant = 'primary' | 'secondary' | 'icon'
type UiButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	variant: UiButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const UiButton = ({ className, variant, ...props }: UiButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				
				'cursor-pointer transition-colors',
				{
					primary: '',
					secondary: 'px-3 py-2 rounded-md',
					icon: 'flex h-10 w-10 items-center justify-center'
				}[variant],className
			)}
		/>
	)
}
