const items = [1, 2, 3]
function SearchBy() {
  const listItems = items.map((item) => <li key={item.toString()}>{item}</li>)
  return (
    <div className="filter__modal">
      <ul>{listItems}</ul>
    </div>
  )
}

export default SearchBy
