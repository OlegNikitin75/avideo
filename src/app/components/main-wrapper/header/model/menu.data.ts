export interface IMenuItem {
	name: string
	url: string
}

export const menuData: IMenuItem[] = [
	{
		name: 'Главная',
		url: '/',
	},
	{
		name: 'Фильмы',
		url: '/movies',
	},
	{
		name: 'Сериалы',
		url: '/tv-show',
	},
	{
		name: 'Список просмотров',
		url: '/watch-list',
	},
]
