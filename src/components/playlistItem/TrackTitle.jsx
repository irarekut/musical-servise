import * as S from './TrackTitle.styled'

function TrackTitle(props) {
  return (
    <S.title>
      <S.titleImage>
        <S.titleSvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </S.titleSvg>
      </S.titleImage>
      <S.titleText>
        <S.titleLink href="http://">
          {props.track} <S.titleSpan>{props.add}</S.titleSpan>
        </S.titleLink>
      </S.titleText>
    </S.title>
  )
}

export default TrackTitle
