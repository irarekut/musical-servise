/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import useSound from 'use-sound'
import TrackPlay from './TrackPlay'
import * as S from './Bar.styled'
import Song from '../../Bobby_Marleni_-_Dropin.mp3'
import { useContextTheme } from '../../context/ContextTheme'

function Bar() {
  const theme = useContextTheme()
  const [isPlaying, setIsPlaying] = useState(false)
  const [Volume, setVolume] = useState(50)
  const [isSeconds, setSeconds] = useState([])
  const audioRef = useRef(null)

  const [play, { pause, duration, sound }] = useSound([Song])

  const togglePlay = () => {
    if (isPlaying) {
      pause()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    }
  }

  const onVolumeChange = (event) => {
    const newVolume = event.target.value / 100
    audioRef.current.volume = newVolume
    setVolume(newVolume)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]))
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [sound])

  return (
    <S.bar
      style={{
        backgroundColor: theme.theme.colorNav,
        color: theme.theme.color,
      }}
    >
      <audio controls ref={audioRef} style={{ display: 'none' }}>
        <track href={Song} type="audio/mpeg" />
      </audio>
      <S.content>
        <S.playerProgress
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={isSeconds}
          onChange={(e) => {
            sound.seek([e.target.value])
          }}
        />
        <S.playerBlock>
          <S.player>
            <S.playerControls>
              <S.btnPrev>
                <S.btnPrevSvg />
              </S.btnPrev>
              {isPlaying === true ? (
                <S.btnPlay onClick={togglePlay} style={{ marginRight: '30px' }}>
                  <S.btnPauseSvg alt="pause" />
                </S.btnPlay>
              ) : (
                <S.btnPlay onClick={togglePlay}>
                  <S.btnPlaySvg alt="play" />
                </S.btnPlay>
              )}
              <S.btnNext>
                <S.btnNextSvg alt="next" />
              </S.btnNext>
              <S.btnRepeat>
                <S.btnRepeatSvg alt="repeat" />
              </S.btnRepeat>
              <S.btnShuffle>
                <S.btnShuffleSvg alt="shuffle" />
              </S.btnShuffle>
            </S.playerControls>

            <TrackPlay />
          </S.player>
          <S.volume>
            <S.volumeContent>
              <S.volumeImage>
                <S.volumeSvg alt="volume" />
              </S.volumeImage>
              <S.progress>
                <S.progressLine
                  type="range"
                  name="range"
                  min="0"
                  max="100"
                  step="1"
                  value={Volume * 100}
                  onChange={onVolumeChange}
                />
                <audio src={Song} controls style={{ display: 'none' }} />
              </S.progress>
            </S.volumeContent>
          </S.volume>
        </S.playerBlock>
      </S.content>
    </S.bar>
  )
}

export default Bar
