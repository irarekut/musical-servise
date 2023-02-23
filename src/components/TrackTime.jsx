function TrackTime(props) {
  return (
    <div className="track__time">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like" />
      </svg>
      <span className="track__time-text">{props.time}</span>
    </div>
  )
}

export default TrackTime
