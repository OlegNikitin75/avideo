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
			className='relative -ml-7 inline-block h-[8.5rem] w-24 rounded-lg border-2 border-transparent transition-colors will-change-transform'
			animate={initialAnimation}
			initial={{ scale: 1, zIndex: 0, y: 0 }}
		>
			<Image
				src={item.poster}
				width={315}
				height={472}
				className='will-change-transform'
				alt={item.title}
				draggable='false'
			/>
		</m.button>
	)
}
