import './index.css'

const BannerCardItem = props => {
  const {Banner} = props
  const {headerText, description, className} = Banner
  return (
    <li className={className}>
      <div className="card-content">
        <h1 className="h">{headerText}</h1>
        <p className="p">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
