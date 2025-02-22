'use client'
import { useFilterStore } from '@/app/store/store'
import { filtersData } from '../model/filters.data'
import { UiButton } from '@/shared/ui'

export const Filters = () => {
	const { currentFilter, setCurrentFilter } = useFilterStore()
	return (
		<div className='border-foreground/10 mt-12 space-x-3 border-[1px] p-2'>
			{filtersData.map(filter => (
				<UiButton
					onClick={() => setCurrentFilter(filter)}
					variant='secondary'
					className={`hover:text-foreground/100 ${filter === currentFilter ? 'bg-primary pointer-events-none text-foreground/100' : 'bg-transparent text-foreground/60'}`}
					key={filter}
				>
					{filter}
				</UiButton>
			))}
		</div>
	)
}
