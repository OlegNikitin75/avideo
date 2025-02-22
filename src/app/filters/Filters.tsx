'use client'
import { useFilterStore } from '@/store/store'
import { UiButton } from '../components/ui'
import { filtersData } from './model/filters.data'

export const Filters = () => {
	const { currentFilter,setCurrentFilter } = useFilterStore()
	return (
		<div className='mt-12 space-x-3'>
			{filtersData.map(filter => (
				<UiButton
				onClick={()=>setCurrentFilter(filter)}
					variant='secondary'
					className={`${filter === currentFilter ? 'bg-primary' : 'bg-transparent'}`}
					key={filter}
				>
					{filter}
				</UiButton>
			))}
		</div>
	)
}
