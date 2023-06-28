import './index.css'

const PasswordItem = props => {
  const {websiteDetails, toggle, deletePassword} = props
  const {id, websiteInput, nameInput, passwordInput} = websiteDetails

  const onDelete = () => {
    deletePassword(id)
  }
  const firstLetter = nameInput[0].toUpperCase()
  return (
    <li className="password-item-container">
      <p className="first-letter">{firstLetter}</p>
      <div>
        <p className="website">{websiteInput}</p>
        <p>{nameInput}</p>
        {toggle ? (
          <p>{passwordInput}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        )}
      </div>
      <button
        type="button"
        onClick={onDelete}
        className="del-btn"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
