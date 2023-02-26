import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Like from '../../img/icon/like.svg'

export const time = styled.div``

export function timeSvg() {
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
export const timeText = styled.span`
  margin-left: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
