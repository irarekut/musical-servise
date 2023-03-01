/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import Filter from './Filter'
import * as S from './CenterBlock.styled'
import HeaderCenterBlock from './header'
import PlaylistTitle from './playlistTitle'
import CenterBlockContent from './centerBlockContent'

function CenterBlock(props) {
  return (
    <S.centerblock>
      <HeaderCenterBlock title={props.title} />
      <Filter />
      <PlaylistTitle />
      <CenterBlockContent tracks={props.tracks} />
    </S.centerblock>
  )
}

export default CenterBlock
