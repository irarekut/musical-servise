/* eslint-disable react/jsx-no-constructed-context-values */
import { useContextTheme, themes } from './ContextTheme'
import * as S from './switcherTheme.styled'

export function SwitcherTheme() {
  const { toggleTheme } = useContextTheme()
  console.log(useContextTheme().theme)

  return (
    <S.buttonTheme onClick={toggleTheme}>
      {themes.dark === useContextTheme().theme ? (
        <S.buttonThemeMoon />
      ) : (
        <S.buttonThemeSun />
      )}
    </S.buttonTheme>
  )
}
