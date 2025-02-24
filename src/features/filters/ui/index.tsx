'use client'
import { useFilterStore } from '@/app/store/store'
import { filtersData } from '../model/filters.data'
import { UiButton } from '@/shared/ui'

export const Filters = () => {
	const { currentFilter, setCurrentFilter } = useFilterStore()
	return (
		<span className='border-foreground/10 mx-auto mt-12 inline-block space-x-3 border-[1px] p-2 rounded-lg'>
			{filtersData.map(filter => (
				<UiButton
					onClick={() => setCurrentFilter(filter)}
					variant='secondary'
					className={`hover:text-foreground/100 ${filter === currentFilter ? 'bg-primary text-foreground/100 pointer-events-none' : 'text-foreground/60 bg-transparent'}`}
					key={filter}
				>
					{filter}
				</UiButton>
			))}
		</span>
	)
}
