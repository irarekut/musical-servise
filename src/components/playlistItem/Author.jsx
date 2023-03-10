import * as S from './Author.styled'
import { useContextTheme } from '../../context/ContextTheme'

function Author(props) {
  const theme = useContextTheme()
  return (
    <S.author>
      <S.authorLink
        style={{
          color: theme.theme.color,
        }}
        href="http://"
      >
        {props.name}
      </S.authorLink>
    </S.author>
  )
}

export default Author
