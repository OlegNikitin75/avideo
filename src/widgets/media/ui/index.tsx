import { MediaItem } from '@/entities/media-item'
import { mediaData } from '@/entities/media-item/data/media.data'

export const Media = () => {
	return (
		<div className='mt-16'>
			{mediaData.map((media, index) => (
				<MediaItem key={media.id} item={media} index={index} arrayLength={mediaData.length} />
			))}
		</div>
	)
}
