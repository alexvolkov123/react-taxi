import { useMemo, useState } from 'react'

export const useLanguages = () => {
  const initLanguages = useMemo(() => ['Russian', 'English', 'German'], [])
  const selectLanguages = initLanguages.map(language => ({ label: language, value: language }))

  const [language, setLanguage] = useState(selectLanguages[0])

  const languages = useMemo(
    () => [language, ...selectLanguages.filter(item => item.label !== language.label)],
    [language, selectLanguages]
  )
  return {
    language,
    languages,
    setLanguage,
  }
}
