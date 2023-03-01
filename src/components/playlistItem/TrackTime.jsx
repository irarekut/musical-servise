import * as S from './TrackTime.styled'

function TrackTime(props) {
  return (
    <S.time>
      <S.timeSvg alt="time" />
      <S.timeText>{props.time}</S.timeText>
    </S.time>
  )
}

export default TrackTime
