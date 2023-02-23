function Album(props) {
  return (
    <div className="track__album">
      <a className="track__album-link" href="http://">
        {props.name}
      </a>
    </div>
  )
}

export default Album
