import { Filters } from '@/features/filters'
import { Media } from '@/widgets/media'

const Home = () => {
	return (
		<div className='text-center mt-4 2xl:mt-8'>
			<h1 className='font-bold md:text-3xl 2xl:text-5xl'>Смотрите всё самое интересное</h1>
			<Filters/>
			<Media/>
		</div>
	)
}
export default Home
