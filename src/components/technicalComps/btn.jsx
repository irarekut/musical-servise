import { Button } from './btn.styled'

function BtnLogin(props) {
  return (
    <Button type="submit" onClick={props.onClick}>
      {props.btntext}
    </Button>
  )
}

export default BtnLogin
