import PopupList from './popup.styled'

function Popup(props) {
  const listItems = props.items.map((item) => (
    <li key={item.toString()}>{item}</li>
  ))

  const coords = props.button.getBoundingClientRect()

  const style = {
    top: `${coords.bottom}px`,
    left: `${coords.left}px`,
  }

  return (
    <PopupList style={style}>
      <ul>{listItems}</ul>
    </PopupList>
  )
}

export default Popup
