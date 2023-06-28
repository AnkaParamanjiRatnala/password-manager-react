import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    searchInput: '',
    websitesList: [],
    websiteInput: '',
    nameInput: '',
    passwordInput: '',
    isToggle: false,
  }

  onWebsiteAdd = event => {
    event.preventDefault()
    const {websiteInput, nameInput, passwordInput} = this.state
    const newWebsite = {
      id: v4(),
      websiteInput,
      nameInput,
      passwordInput,
    }
    this.setState(prevState => ({
      websitesList: [...prevState.websitesList, newWebsite],
      websiteInput: '',
      nameInput: '',
      passwordInput: '',
    }))
  }

  onDeletePassword = id => {
    const {websitesList} = this.state
    const filteredList = websitesList.filter(each => each.id !== id)
    this.setState({websitesList: filteredList})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onToggle = () => {
    this.setState(prevState => ({isToggle: !prevState.isToggle}))
  }

  onWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onUsername = event => {
    this.setState({nameInput: event.target.value})
  }

  onPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {
      searchInput,
      websitesList,
      websiteInput,
      nameInput,
      passwordInput,
      isToggle,
    } = this.state
    const searchList = websitesList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = websitesList.length

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="form-img-container">
          <div className="form-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.onWebsiteAdd} className="form">
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="img-input"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onWebsite}
                  value={websiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="img-input"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onUsername}
                  value={nameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="img-input"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onPassword}
                  value={passwordInput}
                />
              </div>
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="form-img"
            />
          </div>
        </div>
        <div className="password-container">
          <div className="count-search-container">
            <div className="your-count-container">
              <h1 className="password-count">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="img-input"
              />
              <input
                type="search"
                onChange={this.onSearchInput}
                className="search-input"
                placeholder="Search"
              />
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="box" onClick={this.onToggle} />
            <label htmlFor="box">Show Passwords</label>
          </div>
          {count === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="no-password"> No Passwords </p>
            </div>
          ) : (
            <ul className="un-order-list">
              {searchList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  websiteDetails={eachItem}
                  toggle={isToggle}
                  deletePassword={this.onDeletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
