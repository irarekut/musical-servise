import BarBlock from './sidebarBlock'
import * as S from './sideBar.styled'

function Sidebar() {
  return (
    <S.sidebar>
      <S.personal>
        <S.name>Sergey.Ivanov</S.name>
        <S.avatar />
      </S.personal>
      <BarBlock />
    </S.sidebar>
  )
}

export default Sidebar
