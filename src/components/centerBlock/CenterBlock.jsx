/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import PlaylistItem from '../playlistItem/PlaylistItem'
import Filter from './Filter'
import * as S from './CenterBlock.styled'

function CenterBlock() {
  return (
    <S.centerblock>
      <S.search>
        <S.searchSvg />
        <S.searchInput type="search" placeholder="Поиск" name="search" />
      </S.search>
      <S.h2>Треки</S.h2>
      <Filter />
      <S.content>
        <S.playlistTitle>
          <S.playlistTitleCol01>Трек</S.playlistTitleCol01>
          <S.playlistTitleCol02>ИСПОЛНИТЕЛЬ</S.playlistTitleCol02>
          <S.playlistTitleCol03>АЛЬБОМ</S.playlistTitleCol03>
          <S.playlistTitleCol04>
            <S.playlistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.playlistTitleSvg>
          </S.playlistTitleCol04>
        </S.playlistTitle>
        <S.playlist>
          <PlaylistItem
            name="Guilt"
            addition=""
            author="Nero"
            album="Welcome Reality"
            time="4:44"
          />

          <PlaylistItem
            name="Elektro"
            addition=""
            author="Dynoro, Outwork, Mr. Gee"
            album="Elektro"
            time="2:22"
          />

          <PlaylistItem
            name="I’m Fire"
            addition=""
            author="Ali Bakgor"
            album="I’m Fire"
            time="2:22"
          />

          <PlaylistItem
            name="Non Stop"
            addition="(Remix)"
            author="Стоункат, Psychopath"
            album="Non Stop"
            time="4:12"
          />

          <PlaylistItem
            name="Run Run"
            addition="(feat. AR/CO)"
            author="Jaded, Will Clarke, AR/CO"
            album="Run Run"
            time="2:54"
          />

          <PlaylistItem
            name="Eyes on Fire"
            addition="(Zeds Dead Remix)"
            author="Blue Foundation, Zeds Dead"
            album="Eyes on Fire"
            time="5:20"
          />

          <PlaylistItem
            name="Mucho Bien"
            addition="(Hi Profile Remix)"
            author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            album="Mucho Bien"
            time="3:41"
          />

          <PlaylistItem
            name="Knives n Cherries"
            addition=""
            author="minthaze"
            album="Captivating"
            time="1:48"
          />

          <PlaylistItem
            name="How Deep Is Your Love"
            addition=""
            author="Calvin Harris, Disciples"
            album="How Deep Is Your Love"
            time="3:32"
          />

          <PlaylistItem
            name="Morena"
            addition=""
            author="Tom Boxer"
            album="Soundz Made in Romania"
            time="3:36"
          />

          <PlaylistItem name="" author="" album="" time="" />
        </S.playlist>
      </S.content>
    </S.centerblock>
  )
}

export default CenterBlock
