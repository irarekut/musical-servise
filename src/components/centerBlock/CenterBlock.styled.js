import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Search from '../../img/icon/search.svg'
import Watch from '../../img/icon/watch.svg'

const colSize = {
  col: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
  `,
}

const titleMixin = (view = 'col') => {
  const styles = colSize[view]

  return styles
}

export const centerblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const search = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export function searchSvg() {
  return (
    <HandySvg
      src={Search}
      width="17"
      height="17"
      fill="transparent"
      stroke="#ffffff"
    />
  )
}

export const searchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const h2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const content = styled.div`
  display: flex;
  flex-direction: column;
`

export const playlistTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const playlistTitleCol01 = styled.div`
  ${titleMixin()}

  width: 447px;
`

export const playlistTitleCol02 = styled.div`
  ${titleMixin()}

  width: 321px;
`

export const playlistTitleCol03 = styled.div`
  ${titleMixin()}

  width: 245px;
`
export const playlistTitleCol04 = styled.div`
  ${titleMixin()}

  width: 60px;
  text-align: end;
`
export function playlistTitleSvg() {
  return (
    <HandySvg
      src={Watch}
      width="12"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}
export const playlist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
