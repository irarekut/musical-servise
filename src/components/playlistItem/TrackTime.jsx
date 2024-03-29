import * as S from './TrackTime.styled'

function TrackTime(props) {
  const time = (props.time / 60).toFixed(2)
  return (
    <S.time>
      <S.timeText>{time}</S.timeText>
    </S.time>
  )
}

export default TrackTime
