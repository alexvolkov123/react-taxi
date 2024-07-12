import { Link } from '@mui/material'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLanguages, useTypedSelector } from '../../../../../hooks'
import { RoutePathsEnum } from '../../../../../router'
import { CustomSelect } from '../../../selects'
import './header-links.scss'

export const HeaderLinks = () => {
  const navigate = useNavigate()
  const { language, languages, setLanguage } = useLanguages()

  const { userTokens } = useTypedSelector(state => state.auth)

  const handleChangeLanguage = (value: string) =>
    setLanguage({
      label: value,
      value,
    })

  const logout = useCallback(() => {
    navigate(RoutePathsEnum.root)
  }, [navigate])

  return (
    <div className='header-links'>
      <div className='header-links__links'>
        <CustomSelect
          {...{
            items: languages,
            selectedItem: language.label,
            onChange: handleChangeLanguage,
          }}
        />
        {userTokens && <Link onClick={logout}>Log Out</Link>}
      </div>
    </div>
  )
}
