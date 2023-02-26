/* eslint-disable import/no-extraneous-dependencies */
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import SkeletonItems from '../skeleton/SkeletonItem'
import TrackTitle from './TrackTitle'
import Author from './Author'
import Album from './Album'
import TrackTime from './TrackTime'
import * as S from './PlaylistItem.styled'

function PlaylistItem(props) {
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading)
    return (
      <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
        <SkeletonItems />
        <p>
          <Skeleton count={0} />
        </p>
      </SkeletonTheme>
    )
  return (
    <S.playlistItem>
      <S.track>
        <TrackTitle track={props.name} add={props.addition} />
        <Author name={props.author} />
        <Album name={props.album} />
        <TrackTime time={props.time} />
      </S.track>
    </S.playlistItem>
  )
}

export default PlaylistItem
