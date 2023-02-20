import { useState } from 'react'
import Popup from './Popup'

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
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        {filterListData.map((filterItem) => (
          <div
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
          </div>
        ))}
      </div>

      {activeCategory !== '' ? (
        <Popup button={filterButton} items={categoryItems} />
      ) : null}
    </div>
  )
}

export default Filter
