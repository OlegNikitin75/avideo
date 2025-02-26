'use client'
import { useMediaStore } from '@/app/store/storeMedia'
import { MediaItem } from '@/entities/media-item'
import { mediaData } from '@/entities/media-item/data/media.data'
import * as m from 'motion/react-m'
import { useState } from 'react'

const getCardIndex = (mediaItemIndex: number) => mediaData.findIndex(media => media.id === mediaItemIndex)

export const Media = () => {
	const { currentCardId, setCurrentCardId } = useMediaStore()

	const currentMediaItemIndex = mediaData.findIndex(media => media.id === currentCardId)

	// const realIndex = currentMediaItemIndex + 1
	// const rotateAngel = realIndex > 4 ? 360 - (realIndex - 4) * 20 : realIndex * 20

	const updateMediaItemIndex = (id: number) => {
		const previousMediaItemIndex = getCardIndex(currentCardId)
		console.log(previousMediaItemIndex)
		const newMediaItemIndex = getCardIndex(id)
		console.log(newMediaItemIndex)
		setCurrentCardId(id)
	}

	return (
		<m.div
			className='relative mx-auto mt-24 h-[800px] w-[800px] 2xl:mt-60'
			initial={{ rotate: 0 }}
			transition={{ type: 'keyframes' }}
			animate={{ rotate: 360 }}
		>
			{mediaData.map((media, index) => (
				<MediaItem
					key={media.id}
					item={media}
					index={index}
					arrayLength={mediaData.length}
					updateMediaItemIndex={updateMediaItemIndex.bind(null, media.id)}
				/>
			))}
		</m.div>
	)
}
