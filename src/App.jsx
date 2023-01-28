/* eslint-disable jsx-a11y/anchor-is-valid */
import Nav from './nav'
import CenterBlock from './CenterBlock'
import Sidebar from './sideBar'
import Bar from './Bar'

function App() {
  return (
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
  )
}

export default App
