import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Prev from '../../img/icon/prev.svg'
import Play from '../../img/icon/play.svg'
import Next from '../../img/icon/next.svg'
import Repeat from '../../img/icon/repeat.svg'
import Shuffle from '../../img/icon/shuffle.svg'
import Vol from '../../img/icon/volume.svg'

const btn = {
  col: css`
    padding: 5px;
    display: flex;
    align-items: center;

    &:active {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }

    &:active svg {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }

    &:hover svg {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
  `,
}

const titleMixin = () => {
  const styles = btn

  return styles
}

export const bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
  z-index: absolute;
`

export const content = styled.div`
  display: flex;
  flex-direction: column;
`

export const playerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

export const playerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const playerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const btnPrev = styled.div`
  ${titleMixin}

  margin-right: 23px;
`
export function btnPrevSvg() {
  return <HandySvg src={Prev} width="15" height="14" />
}

export const btnPlay = styled.div`
  ${titleMixin}

  margin-right: 23px;
`
export function btnPlaySvg() {
  return <HandySvg src={Play} width="22" height="20" fill="#d9d9d9" />
}

export const btnNext = styled.div`
  ${titleMixin}

  margin-right: 28px;
  fill: #a53939;
`

export function btnNextSvg() {
  return (
    <HandySvg
      src={Next}
      width="15"
      height="14"
      fill="inherit"
      stroke="#d9d9d9"
    />
  )
}

export const btnRepeat = styled.div`
  ${titleMixin}

  margin-right: 24px;
`

export function btnRepeatSvg() {
  return (
    <HandySvg
      src={Repeat}
      width="18"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}

export const btnShuffle = styled.div`
  ${titleMixin}

  display: flex;
  align-items: center;
`
export function btnShuffleSvg() {
  return (
    <HandySvg
      src={Shuffle}
      width="19"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}

export const volume = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const volumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const volumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

export function volumeSvg() {
  return <HandySvg src={Vol} width="13" height="18" fill="transparent" />
}

export const progress = styled.div`
  width: 109px;
`

export const progressLine = styled.input`
  width: 109px;
`
