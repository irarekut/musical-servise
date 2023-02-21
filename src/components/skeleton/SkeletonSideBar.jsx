import Skeleton from 'react-loading-skeleton'

function SkeletonSideBar() {
  return (
    <div className="skeleton__sidebar">
      <div
        className="left-col"
        style={{
          display: 'block',
        }}
      >
        <Skeleton width={250} height={150} />
      </div>
      <div
        className="long-col"
        style={{
          display: 'block',
        }}
      >
        <Skeleton width={250} height={150} />
      </div>
      <div
        className="long-col"
        style={{
          display: 'block',
        }}
      >
        <Skeleton width={250} height={150} />
      </div>
    </div>
  )
}

export default SkeletonSideBar
