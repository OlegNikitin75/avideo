import { FC } from 'react'
import { IMediaItem } from '@/entities/media-item/model/media.item.data'
import { Star, Wheat } from 'lucide-react'
import clsx from 'clsx'

interface IUiMediaItemDetailsProps {
	item: IMediaItem
}

export const UiMediaItemDetails: FC<IUiMediaItemDetailsProps> = ({ item }) => {
	return (
		<div className='absolute top-0 right-0 z-20'>
			<div
				className={clsx(
					item.rating >= 8 ? 'bg-yellow-600 text-black' : 'bg-secondary text-white',
					'flex min-w-16 items-center justify-center gap-2 rounded-md p-0.5'
				)}
			>
				{
					item.rating>=8&&<Wheat size={16} />
				}
				<Star size={16} />
				{item.rating}
			</div>
		</div>
	)
}
