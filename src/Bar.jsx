import 'react-loading-skeleton/dist/skeleton.css'
import TrackPlay from './TrackPlay'
// import SkeletonItems from './SkeletonItem'

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <svg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div className="player__btn-play _btn">
                <svg className="player__btn-play-svg" alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </svg>
              </div>
              <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </svg>
              </div>
            </div>

            <TrackPlay />
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar
