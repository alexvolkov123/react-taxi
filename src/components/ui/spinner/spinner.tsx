import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './spinner.scss'

export const Spinner = () => {
	const { isLoading } = useTypedSelector(state => state.loading)
	return (
		<>
			{isLoading && (
				<div className='spinner'>
					<div className='spinner_img' />
				</div>
			)}
		</>
	)
}
