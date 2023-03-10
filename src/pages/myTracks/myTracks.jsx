import Nav from '../../components/nav/nav'
import Bar from '../../components/bar/Bar'
import * as S from './myTracks.styled'
import CenterBlock from '../../components/centerBlock/CenterBlock'
import SideBarPlaylist from '../../components/sideBar/sideBarPlaylist'
import { MAINTRACKS } from '../../constants/MAINTRACKS'

function MyTracks() {
  return (
    <S.container>
      <S.main>
        <Nav />
        <CenterBlock title="Мои треки" tracks={MAINTRACKS} />
        <SideBarPlaylist />
      </S.main>
      <Bar />
    </S.container>
  )
}

export default MyTracks
