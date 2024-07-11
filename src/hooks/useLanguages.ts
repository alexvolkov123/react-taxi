import { useMemo, useState } from 'react'

export const useLanguages = () => {
  const initLanguages = useMemo(() => ['English', 'Russian', 'German'], [])

  const [language, setLanguage] = useState('Russian')

  const languages = useMemo(
    () => [language, ...initLanguages.filter(item => item !== language)],
    [initLanguages, language]
  )
  return {
    language,
    languages,
    setLanguage,
  }
}
