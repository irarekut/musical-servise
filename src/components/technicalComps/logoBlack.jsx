import * as S from './logoBlack.styled'
import logo from '../../img/logoLogin.png'

function LogoBlack() {
  return (
    <S.logo>
      <S.logoImg src={logo} alt="logo" />
    </S.logo>
  )
}

export default LogoBlack
