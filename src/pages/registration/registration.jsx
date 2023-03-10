import * as S from './registration.styled'
import Input from '../../components/technicalComps/input'
import BtnLogin from '../../components/technicalComps/btn'
import LogoBlack from '../../components/technicalComps/logoBlack'

function Registration() {
  return (
    <S.container>
      <LogoBlack />
      <Input type="text" placeholder="Логин" />
      <Input type="password" placeholder="Пароль" />
      <Input type="password" placeholder="Повторите пароль" />
      <BtnLogin btntext="Зарегистрироваться" />
    </S.container>
  )
}

export default Registration
