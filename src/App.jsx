/* eslint-disable jsx-a11y/anchor-is-valid */
import Nav from './components/nav/nav'
import CenterBlock from './components/centerBlock/CenterBlock'
import Sidebar from './components/sideBar/sideBar'
import Bar from './components/bar/Bar'
import * as S from './App.styled'

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.wrapper>
        <S.container>
          <S.main>
            <Nav />
            <CenterBlock />
            <Sidebar />
          </S.main>
          <Bar />
          <S.footer />
        </S.container>
      </S.wrapper>
    </>
  )
}

export default App
