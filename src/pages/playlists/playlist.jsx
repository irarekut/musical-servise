/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-extraneous-dependencies */
import { useParams } from 'react-router-dom'
import Nav from '../../components/nav/nav'
import Bar from '../../components/bar/Bar'
import * as S from './playlist.styled'
import CenterBlock from '../../components/centerBlock/CenterBlock'
import SideBarPlaylist from '../../components/sideBar/sideBarPlaylist'
import { PLAYLISTS } from '../../constants/Playlists'

function Playlist() {
  const params = useParams()

  const playlist = PLAYLISTS.find((p) => p.id === Number(params.id))

  return (
    <S.container>
      <S.main>
        <Nav />
        <CenterBlock tracks={playlist.tracks} />
        <SideBarPlaylist />
      </S.main>
      <Bar />
    </S.container>
  )
}

export default Playlist
