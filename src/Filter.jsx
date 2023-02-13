import { useState } from 'react'
// import 'react-loading-skeleton/dist/skeleton.css'
import SearchBy from './SearchBy'

function Filter() {
  const [activeCategory, setActiveCategory] = useState('')

  const handleClickCategory = (categoryName) => {
    if (activeCategory === categoryName) {
      setActiveCategory('')
      return
    }

    setActiveCategory(categoryName)
  }

  return (
    <div>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className={
            activeCategory === 'author'
              ? 'filter__button button-author _btn-text active'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => {
            handleClickCategory('author')
          }}
          role="presentation"
        >
          исполнителю
        </div>
        <div
          className={
            activeCategory === 'year'
              ? 'filter__button button-year _btn-text active'
              : 'filter__button button-year _btn-text'
          }
          onClick={() => handleClickCategory('year')}
          role="presentation"
        >
          году выпуска
        </div>
        <div
          className={
            activeCategory === 'genre'
              ? 'filter__button button-genre _btn-text active'
              : 'filter__button button-genre _btn-text'
          }
          onClick={() => handleClickCategory('genre')}
          role="presentation"
        >
          жанру
        </div>
      </div>

      {activeCategory === 'author' ? <SearchBy /> : null}

      {activeCategory === 'year' ? <SearchBy /> : null}

      {activeCategory === 'genre' ? <SearchBy /> : null}
    </div>
  )
}

export default Filter
