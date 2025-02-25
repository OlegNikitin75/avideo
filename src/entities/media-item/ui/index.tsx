'use client'

import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import * as m from 'motion/react-m'
import { IMediaItem } from '../model/media.item.data'
import { useMediaStore } from '@/app/store/storeMedia'

interface IMediaItemProps {
	item: IMediaItem
	index: number
	arrayLength: number
}

export const MediaItem: FC<IMediaItemProps> = ({ item, index, arrayLength }) => {
	const { currentCardId, setCurrentCardId } = useMediaStore()

	const isActiveItem = currentCardId === item.id
	const angleStep = 360 / arrayLength
	const angle = -90 + angleStep * index
	const radius = 400

	return (
		<div
			style={{
				position: 'absolute',
				left: '50%',
				top: '85%',
				transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0,-${radius}px)`,
				zIndex: isActiveItem ? 1 : 0
			}}
		>
			<m.button
				className={clsx(
					'border-primary h-96 w-64 overflow-hidden rounded-xl border-3 transition-colors will-change-transform',
					!isActiveItem && 'contrast-75 grayscale-100'
				)}
				onClick={() => setCurrentCardId(item.id)}
				animate={{
					scale: isActiveItem ? 1.1 : 1
				}}
				initial={{
					zIndex: 0
				}}
				transition={{ type: 'keyframes', stiffness: 230, damping: 32 }}
			>
				<Image
					src={item.poster}
					width={256}
					height={384}
					style={{ objectFit: 'cover', width: '100%', height: '100%' }}
					className='will-change-transform'
					alt={item.title}
					draggable='false'
					priority
				/>
			</m.button>
		</div>
	)
}
