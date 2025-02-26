import { FC } from 'react'
import clsx from 'clsx'
import { IMediaItem } from '@/entities/media-item/model/media.item.data'

interface IUiMediaItemDetailsProps {
	item: IMediaItem
}

export const UiMediaItemDetails: FC<IUiMediaItemDetailsProps> = ({ item }) => {
	return (
		<span
			className={clsx(
				item.rating >= 8 ? 'bg-accent text-black' : 'bg-secondary border-secondary text-white',
				'absolute z-10 top-1 right-1 flex h-6 w-12 items-center justify-center gap-2 rounded-lg p-1 text-sm'
			)}
		>
			{item.rating.toFixed(1)}
		</span>
	)
}
