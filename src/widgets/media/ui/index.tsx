'use client'
import { useMediaStore } from '@/app/store/storeMedia'
import { MediaItem } from '@/entities/media-item'
import { mediaData } from '@/entities/media-item/data/media.data'
import { useWindowDimensions } from '@/shared/hooks/useWindowDimensions('
import * as m from 'motion/react-m'
import { useState } from 'react'

const getCardIndex = (mediaItemIndex: number) => mediaData.findIndex(media => media.id === mediaItemIndex)

export const Media = () => {
	const { currentCardId, setCurrentCardId } = useMediaStore()
	const { isMobile, isTablet, isDesktop2xl } = useWindowDimensions()
	const [rotateAngle, setRotateAngle] = useState(0)

	const updateMediaItemIndex = (id: number) => {
		if (currentCardId === id) return

		const previousMediaItemIndex = getCardIndex(currentCardId)

		const newMediaItemIndex = getCardIndex(id)
		const diff = newMediaItemIndex - previousMediaItemIndex

		let newRotateAngle = -(diff * 30)
		newRotateAngle = newRotateAngle === 330 ? -30 : newRotateAngle
		newRotateAngle = newRotateAngle === -330 ? 30 : newRotateAngle
		setRotateAngle(prev => prev + newRotateAngle)
		setCurrentCardId(id)
	}
	

	return (
		<m.div
			className='relative mx-auto mt-52 xl:mt-24 h-[350px] w-[350px] xl:h-[900px] xlw-[900px] 2xl:mt-64'
			initial={{ rotate: 0 }}
			transition={{ type: 'keyframes',duration: 0.5 }}
			animate={{ rotate: rotateAngle ? `${rotateAngle}deg` : 0 }}
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
