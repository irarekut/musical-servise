function Author(props) {
  return (
    <div className="track__author">
      <a className="track__author-link" href="http://">
        {props.name}
      </a>
    </div>
  )
}

export default Author
