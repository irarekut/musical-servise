/* eslint-disable jsx-a11y/anchor-is-valid */
import { createGlobalStyle } from 'styled-components'
import Nav from './components/nav'
import CenterBlock from './components/CenterBlock'
import Sidebar from './components/sideBar'
import Bar from './components/Bar'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('/fonts/stratosskyengweb-regular.woff2') format('woff2'),
    url('/fonts/stratosskyengweb-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}`

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <CenterBlock />
            <Sidebar />
          </main>
          <Bar />
          <footer className="footer" />
        </div>
      </div>
    </>
  )
}

export default App
