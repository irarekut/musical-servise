function Popup(props) {
  const listItems = props.items.map((item) => (
    <li key={item.toString()}>{item}</li>
  ))

  const coords = props.button.getBoundingClientRect()

  const style = {
    top: `${coords.bottom}px`,
    left: `${coords.left}px`,
  }

  console.log('style', style)

  return (
    <div style={style} className="filter__modal">
      <ul>{listItems}</ul>
    </div>
  )
}

export default Popup
