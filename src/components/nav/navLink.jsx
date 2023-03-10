// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

function NavLink(props) {
  return (
    <Link
      style={{
        color: '#ffffff',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
      }}
      to={props.address}
    >
      {props.text}
    </Link>
  )
}

export default NavLink
