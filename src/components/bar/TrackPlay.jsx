import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import SkeletonTrackPlay from '../skeleton/SkeletonTrackPlay'
import * as S from './TrackPlay.styled'

function TrackPlay() {
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
        <SkeletonTrackPlay />
      </SkeletonTheme>
    )
  return (
    <S.trackPlay>
      <S.contain>
        <S.image>
          <S.svg alt="music" />
        </S.image>
        <S.author>
          <S.authorLink href="http://">Ты та...</S.authorLink>
        </S.author>
        <S.album>
          <S.albumLink href="http://">Баста</S.albumLink>
        </S.album>
      </S.contain>
      <S.likeBar>
        <S.like>
          <S.likeSvg alt="like" />
        </S.like>
        <S.dislike>
          <S.dislikeSvg alt="dislike" />
        </S.dislike>
      </S.likeBar>
    </S.trackPlay>
  )
}

export default TrackPlay
