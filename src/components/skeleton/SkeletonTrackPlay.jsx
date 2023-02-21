import Skeleton from 'react-loading-skeleton'

function SkeletonTrackPlay() {
  return (
    <div className="skeleton__bar">
      <div
        className="img"
        style={{
          gridArea: 'img',
          display: 'block',
          marginBottom: '10px',
          marginRight: '294px',
        }}
      >
        <Skeleton width={51} height={51} />
      </div>
      <div
        className="row"
        style={{
          gridArea: 'track',
          display: 'block',
        }}
      >
        <Skeleton width={100} height={19} />
      </div>
      <div
        className="row"
        style={{
          gridArea: 'author',
          display: 'block',
        }}
      >
        <Skeleton width={100} height={19} />
      </div>
    </div>
  )
}

export default SkeletonTrackPlay
