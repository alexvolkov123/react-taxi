import { useCallback, useMemo, useState } from 'react'

import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { RoutePathsEnum } from '../../../../router/routes/types'
import { BaseSelect } from '../../../ui/selects/base-select/base-select'
import './header-links.scss'

const initLanguages = ['English', 'Russian', 'German']

export const HeaderLinks = () => {
	const navigate = useNavigate()
	const [language, setLanguage] = useState('Russian')

	const isOpen = true

	const languages = useMemo(
		() => [language, ...initLanguages.filter(item => item !== language)],
		[language]
	)

	const handleChangeLanguage = (value: string) => setLanguage(value)

	const logout = useCallback(() => {
		navigate(RoutePathsEnum.root)
	}, [navigate])

	return (
		<div className='wrapper'>
			<div className='wrapper__links'>
				<BaseSelect
					id='base'
					items={languages}
					selectedItem={language}
					onChange={handleChangeLanguage}
				/>
				{isOpen && <Link onClick={logout}>Log Out</Link>}
			</div>
		</div>
	)
}
