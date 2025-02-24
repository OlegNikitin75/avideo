import { TFilter } from '@/features/filters/model/filters.data'

export interface IMediaItem {
	id: number
	title: string
	slug:string
	poster: string
	backdrop:string
	rating: number
	type: TFilter
	genres: string[]
	seasons?: ISeasons[]
}

export interface ISeasons {
	id: number
	title:string
	slug:string
	episode: IVideo[]
}
export interface IVideo {
	id: number
	title: string
	slug:string
	duration: number
	poster: string
	videoUrl: string
}
