function TrackTitle(props) {
  return (
    <div className="track__title">
      <div className="track__title-image">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className="track__title-text">
        <a className="track__title-link" href="http://">
          {props.track} <span className="track__title-span" />
        </a>
      </div>
    </div>
  )
}

export default TrackTitle
