import TrackTitle from './TrackTitle'
import Author from './Author'
import Album from './Album'
import TrackTime from './TrackTime'

function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <TrackTitle track={props.name} />
        <Author name={props.author} />
        <Album name={props.album} />
        <TrackTime time={props.time} />
      </div>
    </div>
  )
}

export default PlaylistItem
