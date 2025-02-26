import { Bell, LayoutGrid, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { menuData } from '../model/menu.data'
import { UiButton } from './ui-button'

export const UiHeader = () => {
	return (
		<header className='py-4 2xl:py-6'>
			<nav className='flex justify-between'>
				<ul className='flex flex-wrap items-center gap-5 md:gap-10 2xl:gap-16'>
					<Link className='hover:text-primary transition-colors' href={menuData[0].url}>
						<LayoutGrid />
					</Link>

					{menuData.map(item => (
						<li key={item.name}>
							<Link
								className='group hover:text-primary relative font-medium transition-colors ease-in-out'
								href={item.url}
							>
								{item.name}
								<span className='group-hover:bg-primary absolute top-8 left-0 h-0.5 w-full bg-transparent transition-colors' />
							</Link>
						</li>
					))}
				</ul>
				<div className='flex items-center gap-4'>
					<UiButton className='hover:text-primary' variant='icon'>
						<Search />
					</UiButton>
					<UiButton className='hover:text-primary' variant='icon'>
						<Bell />
					</UiButton>
					<UiButton variant='icon'>
						<Image
							className='border-foreground hover:border-primary rounded-full border-2 p-1 transition-colors'
							src='/man.png'
							height={40}
							width={40}
							alt='avatar'
						/>
					</UiButton>
				</div>
			</nav>
		</header>
	)
}
