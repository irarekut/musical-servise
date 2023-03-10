import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import SkeletonTrackPlay from '../skeleton/SkeletonTrackPlay'
import * as S from './TrackPlay.styled'
import { useContextTheme } from '../../context/ContextTheme'

function TrackPlay() {
  const [isLoading, setLoading] = React.useState(true)
  const theme = useContextTheme()

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
        <S.image
          style={{
            backgroundColor: theme.theme.background,
          }}
        >
          <S.svg alt="music" />
        </S.image>
        <S.author>
          <S.authorLink
            style={{
              color: theme.theme.color,
            }}
            href="http://"
          >
            Ты та...
          </S.authorLink>
        </S.author>
        <S.album>
          <S.albumLink
            style={{
              color: theme.theme.color,
            }}
            href="http://"
          >
            Баста
          </S.albumLink>
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
