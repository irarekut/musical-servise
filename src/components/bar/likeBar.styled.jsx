import styled, { css } from 'styled-components'
import { HandySvg } from 'handy-svg'
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
