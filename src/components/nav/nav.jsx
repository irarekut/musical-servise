import { useState } from 'react'
import logo from '../../img/logo.png'
import * as S from './nav.styled'

function Nav() {
  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => setVisible(!visible)

  return (
    <S.nav>
      <S.logo>
        <S.logoImage src={logo} alt="logo" />
      </S.logo>
      <S.burger onClick={toggleVisibility} role="presentation">
        <S.burgerLine />
        <S.burgerLine />
        <S.burgerLine />
      </S.burger>
      <S.menu>
        {!visible && (
          <S.menuList>
            <S.menuItem>
              <S.menuLink href="http://">Главное</S.menuLink>
            </S.menuItem>
            <S.menuItem>
              <S.menuLink href="http://">Мой плейлист</S.menuLink>
            </S.menuItem>
            <S.menuItem>
              <S.menuLink href="http://">Войти</S.menuLink>
            </S.menuItem>
          </S.menuList>
        )}
      </S.menu>
    </S.nav>
  )
}

export default Nav
