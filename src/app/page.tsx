import { Filters } from '@/features/filters'
import { Media } from '@/widgets/media'

const Home = () => {
	return (
		<div className='text-center mt-8'>
			<h1 className='font-bold text-5xl'>Смотрите всё самое интересное</h1>
			<Filters/>
			<Media/>
		</div>
	)
}
export default Home
