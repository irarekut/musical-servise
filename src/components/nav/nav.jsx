/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './navLink'
import logo from '../../img/logo.png'
import * as S from './nav.styled'

function Nav() {
  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => setVisible(!visible)

  return (
    <S.nav>
      <Link to="/">
        <S.logo>
          <S.logoImage src={logo} alt="logo" />
        </S.logo>
      </Link>
      <S.burger onClick={toggleVisibility} role="presentation">
        <S.burgerLine />
        <S.burgerLine />
        <S.burgerLine />
      </S.burger>
      <S.menu>
        {!visible && (
          <S.menuList>
            <S.menuItem>
              <NavLink address="/" text="Главное" />
            </S.menuItem>
            <S.menuItem>
              <NavLink address="/mytracks" text="Мои треки" />
            </S.menuItem>
            <S.menuItem>
              <NavLink address="/login" text="Войти" />
            </S.menuItem>
          </S.menuList>
        )}
      </S.menu>
    </S.nav>
  )
}

export default Nav
