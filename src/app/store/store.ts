import { TFilter } from '@/features/filters/model/filters.data'
import { create } from 'zustand'

export interface IStore {
	currentFilter: TFilter
	setCurrentFilter: (filter: TFilter) => void
}

export const useFilterStore = create<IStore>(set => ({
	currentFilter: 'Жанры',
	setCurrentFilter: filter => set({ currentFilter: filter })
}))
