/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Input from '../../components/technicalComps/input'
import LogoBlack from '../../components/technicalComps/logoBlack'
import * as S from './login.styled'
import BtnLogin from '../../components/technicalComps/btn'

function Login() {
  const navigate = useNavigate()

  const [login, setLogin] = useState('')

  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    const userLogin = login
    const userPassword = password

    console.log(userLogin, userPassword)

    if (userLogin === 'user' && userPassword === '1234') {
      Cookies.set('token', '1234')
      navigate('/', { replace: true })
    } else {
      console.log('неправильный логин или пароль')
    }
  }

  const handleRegistration = (event) => {
    event.preventDefault()
    navigate('/registration', { replace: true })
  }

  return (
    <S.container>
      <LogoBlack />
      <S.wrapper>
        <Input
          id="login"
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.wrapper>
      <BtnLogin onClick={handleLogin} btntext="Войти" />
      <S.btnReg onClick={handleRegistration}>Зарегистрироваться</S.btnReg>
    </S.container>
  )
}

export default Login
