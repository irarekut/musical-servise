import PlaylistItem from '../playlistItem/PlaylistItem'
import * as S from './centerBlockContent.styled'

function CenterBlockContent({ tracks }) {
  return (
    <S.content>
      <S.playlist>
        {tracks?.map((play) => (
          <PlaylistItem
            key={play.idTrack}
            name={play.name}
            addition={play.addition}
            author={play.author}
            album={play.album}
            time={play.time}
          />
        ))}
      </S.playlist>
    </S.content>
  )
}

export default CenterBlockContent
