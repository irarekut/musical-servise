import TrackPlay from './TrackPlay'
import * as S from './Bar.styled'

function Bar() {
  return (
    <S.bar>
      <S.content>
        <S.playerProgress />
        <S.playerBlock>
          <S.player>
            <S.playerControls>
              <S.btnPrev>
                <S.btnPrevSvg />
              </S.btnPrev>
              <S.btnPlay>
                <S.btnPlaySvg alt="play" />
              </S.btnPlay>
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
                <S.progressLine type="range" name="range" />
              </S.progress>
            </S.volumeContent>
          </S.volume>
        </S.playerBlock>
      </S.content>
    </S.bar>
  )
}

export default Bar
