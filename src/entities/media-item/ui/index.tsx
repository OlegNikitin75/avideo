'use client'

import { FC } from 'react'
import Image from 'next/image'
import { IMediaItem } from '../model/media.item.data'
import { useGetStyleRotation } from '../hooks/useGetStyleRotation'
import * as m from 'motion/react-m'

interface IMediaItemProps {
	item: IMediaItem
	index: number
	arrayLength: number
}

export const MediaItem: FC<IMediaItemProps> = ({ item, index, arrayLength }) => {
	const { rotate, translateY } = useGetStyleRotation(index, arrayLength)

	const initialAnimation = {
		scale: 1,
		zIndex: 0,
		y: translateY,
		rotate
	}
	return (
		<m.button
			className='relative -ml-7 inline-block  rounded-xl border-2 border-transparent transition-colors will-change-transform overflow-hidden h-[470px] w-80'
			//animate={initialAnimation}
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
