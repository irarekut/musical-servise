import { Button } from './btn.styled'

function BtnLogin(props) {
  return <Button onClick={props.onClick}>{props.btntext}</Button>
}

export default BtnLogin
