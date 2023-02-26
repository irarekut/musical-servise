import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Note from '../../img/icon/note.svg'
import Like from '../../img/icon/like.svg'
import Dislike from '../../img/icon/dislike.svg'

const likeDis = {
  col: css`
    padding: 5px;
    &:hover svg {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }

    &:active svg {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }

    &:active {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }
  `,
}

const titleMixin = () => {
  const styles = likeDis

  return styles
}

export const trackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const contain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const image = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`

export function svg() {
  return (
    <HandySvg
      src={Note}
      width="18"
      height="17"
      fill="transparent"
      stroke="#4e4e4e"
    />
  )
}

export const author = styled.div`
  grid-area: author;
  min-width: 49px;
`

export const authorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`

export const album = styled.div`
  grid-area: album;
  min-width: 49px;
`
export const albumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`

export const likeBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const like = styled.div`
  ${titleMixin}
`

export function likeSvg() {
  return (
    <HandySvg
      src={Like}
      width="14"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}

export const dislike = styled.div`
  ${titleMixin}
  margin-left: 28.5px;
`

export function dislikeSvg() {
  return (
    <HandySvg
      src={Dislike}
      width="14.34"
      height="13"
      fill="transparent"
      stroke="#696969"
    />
  )
}
