/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import * as S from './App.styled'

function App() {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.App>
        <S.wrapper>
          <S.container>
            <AppRoutes />
          </S.container>
          <S.footer />
        </S.wrapper>
      </S.App>
    </BrowserRouter>
  )
}

export default App
