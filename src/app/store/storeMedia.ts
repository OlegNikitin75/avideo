import { create } from 'zustand'

export interface IStoreMedia {
	currentCardId: number
	setCurrentCardId: (id: number) => void
}

export const useMediaStore = create<IStoreMedia>(set => ({
	currentCardId: 1,
	setCurrentCardId: id => set({ currentCardId: id })
}))
