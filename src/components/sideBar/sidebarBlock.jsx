/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonSideBar from '../skeleton/SkeletonSideBar'
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import * as S from './sideBarBlock.styled'

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
      <S.block>
        <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
          <SkeletonSideBar />
          <p>
            <Skeleton count={0} />
          </p>
        </SkeletonTheme>
      </S.block>
    )
  return (
    <S.block>
      <S.list>
        <S.item>
          <S.link href="#">
            <S.img src={playlist01} alt="day's playlist" />
          </S.link>
        </S.item>
        <S.item>
          <S.link href="#">
            <S.img src={playlist02} alt="day's playlist" />
          </S.link>
        </S.item>
        <S.item>
          <S.link href="#">
            <S.img src={playlist03} alt="day's playlist" />
          </S.link>
        </S.item>
      </S.list>
    </S.block>
  )
}

export default BarBlock
