/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import PlaylistItem from './PlaylistItem'

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
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
        </div>
      </div>
    </div>
  )
}

export default CenterBlock
