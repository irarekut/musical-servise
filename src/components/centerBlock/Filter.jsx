import { useState } from 'react'
import Popup from './Popup'
import * as S from './filter.styled'

function Filter() {
  const filterListData = [
    {
      filter: 'author',
      name: 'исполнителю',
    },
    {
      filter: 'year',
      name: 'году выпуска',
    },
    {
      filter: 'genre',
      name: 'жанру',
    },
  ]

  const [activeCategory, setActiveCategory] = useState('')
  const [filterButton, setFilterButton] = useState()
  const [categoryItems, setCategoryItems] = useState([])

  const handleClickCategory = (e, filterName) => {
    setFilterButton(e.target)
    if (activeCategory === filterName) {
      setActiveCategory('')
      setCategoryItems([])
      return
    }

    setActiveCategory(filterName)
    setCategoryItems([1, 2, 3, 4].map((x) => `${filterName}_${x}`))
  }

  return (
    <div>
      <S.filter>
        <S.title>Искать по:</S.title>
        {filterListData.map((filterItem) => (
          <S.button
            key={filterItem.filter}
            className={
              activeCategory === filterItem.filter
                ? `filter__button button-${filterItem.filter} _btn-text active`
                : `filter__button button-${filterItem.filter} _btn-text`
            }
            onClick={(e) => handleClickCategory(e, filterItem.filter)}
            role="presentation"
          >
            {filterItem.name}
          </S.button>
        ))}
      </S.filter>

      {activeCategory !== '' ? (
        <Popup button={filterButton} items={categoryItems} />
      ) : null}
    </div>
  )
}

export default Filter
