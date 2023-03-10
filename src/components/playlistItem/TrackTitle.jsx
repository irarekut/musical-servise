import * as S from './TrackTitle.styled'
import { useContextTheme } from '../../context/ContextTheme'

function TrackTitle(props) {
  const theme = useContextTheme()

  return (
    <S.title>
      <S.titleImage
        style={{
          backgroundColor: theme.theme.background,
        }}
      >
        <S.NoteSvg alt="music" />
      </S.titleImage>
      <S.titleText>
        <S.titleLink
          style={{
            color: theme.theme.color,
          }}
          href="http://"
        >
          {props.track} <S.titleSpan>{props.add}</S.titleSpan>
        </S.titleLink>
      </S.titleText>
    </S.title>
  )
}

export default TrackTitle
