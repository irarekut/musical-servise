import * as S from './Author.styled'

function Author(props) {
  return (
    <S.author>
      <S.authorLink href="http://">{props.name}</S.authorLink>
    </S.author>
  )
}

export default Author
