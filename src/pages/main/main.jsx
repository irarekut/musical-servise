/* eslint-disable react/jsx-no-constructed-context-values */
import Nav from '../../components/nav/nav'
import CenterBlock from '../../components/centerBlock/CenterBlock'
import Sidebar from '../../components/sideBar/sideBar'
import Bar from '../../components/bar/Bar'
import * as S from './main.styled'
import { MAINTRACKS } from '../../constants/MAINTRACKS'

function Main() {
  return (
    <S.container>
      <S.main>
        <Nav />
        <CenterBlock tracks={MAINTRACKS} />
        <Sidebar />
      </S.main>
      <Bar />
    </S.container>
  )
}

export default Main
