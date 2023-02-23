import BarBlock from './sidebarBlock'

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <BarBlock />
    </div>
  )
}

export default Sidebar
