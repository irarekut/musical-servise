/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonSideBar from './skeleton/SkeletonSideBar'
import playlist01 from './img/playlist01.png'
import playlist02 from './img/playlist02.png'
import playlist03 from './img/playlist03.png'

function BarBlock() {
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading)
    return (
      <div className="sidebar__block">
        <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
          <SkeletonSideBar />
          <p>
            <Skeleton count={0} />
          </p>
        </SkeletonTheme>
      </div>
    )
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist01}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist02}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist03}
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BarBlock
