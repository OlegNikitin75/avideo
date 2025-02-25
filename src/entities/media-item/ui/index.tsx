'use client'

import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import * as m from 'motion/react-m'
import { IMediaItem } from '../model/media.item.data'
import { useGetStyleRotation } from '../hooks/useGetStyleRotation'
import { useMediaStore } from '@/app/store/storeMedia'
import { mediaData } from '../data/media.data'

interface IMediaItemProps {
	item: IMediaItem
	index: number
	arrayLength: number
}

export const MediaItem: FC<IMediaItemProps> = ({ item, index, arrayLength }) => {
	//const { rotate, translateY } = useGetStyleRotation(index, arrayLength)
	const { currentCardId, setCurrentCardId } = useMediaStore()

	const angleStep = 360 / mediaData.length
	const isActive = currentCardId === item.id
	const rotate = isActive ? 0 : angleStep * index


	// const initialAnimation = {
	// 	scale: 1,
	// 	zIndex: 0,
	// 	y: translateY,
	// 	rotate
	// }

	return (
		<m.button
			className={clsx(
				'relative -ml-7 inline-block h-[470px] w-80 overflow-hidden rounded-xl border-2 border-transparent transition-colors will-change-transform',
				!isActive && 'contrast-75 grayscale-100'
			)}
			// style={{
			// 	transform: `rotate(${rotate}deg) translateY(-300px)`
			// }}
			onClick={() => setCurrentCardId(item.id)}
			animate={{ scale: isActive ? 1.2 : 1, zIndex: isActive ? 1 : 0 }}
			initial={{ scale: 1, zIndex: 0, y: 0 }}
			transition={{ type: 'keyframes', stiffness: 230, damping: 32 }}
		>
			<Image
				src={item.poster}
				fill={true}
				className='will-change-transform'
				alt={item.title}
				draggable='false'
			/>
		</m.button>
	)
}
