import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Exit from '../../img/icon/logOut.svg'

export const sidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const logOut = styled.div`
  margin-top: 19px;
`

export function logOutSvg() {
  return <HandySvg src={Exit} width="40" height="40" fill="transparent" />
}
