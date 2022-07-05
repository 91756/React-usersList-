import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {uniqueNo, imageUrl, name, role} = userDetails
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default UserProfile
