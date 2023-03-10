import PopupList from './popup.styled'
import { useContextTheme } from '../../context/ContextTheme'

function Popup(props) {
  const theme = useContextTheme()
  const listItems = props.items.map((item) => (
    <li key={item.toString()}>{item}</li>
  ))

  const coords = props.button.getBoundingClientRect()

  const style = {
    top: `${coords.bottom}px`,
    left: `${coords.left}px`,
    backgroundColor: theme.theme.colorNav,
    color: theme.theme.color,
  }

  return (
    <PopupList style={style}>
      <ul>{listItems}</ul>
    </PopupList>
  )
}

export default Popup
