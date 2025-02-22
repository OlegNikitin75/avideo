import { Filters } from './filters/Filters'

const Home = () => {
	return (
		<div className='text-center mt-16'>
			<h1 className='font-bold text-5xl'>Смотрите всё самое интересное</h1>
			<Filters/>
		</div>
	)
}
export default Home
