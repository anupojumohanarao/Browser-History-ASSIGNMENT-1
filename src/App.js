import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    latestHistoryList: initialHistoryList,
    isTrue: false,
  }

  totalMainFunction = value => {
    const {latestHistoryList} = this.state
    const newBrowserHistoryList = latestHistoryList.filter(
      eachItem => eachItem.id !== value,
    )
    if (newBrowserHistoryList.length === 0) {
      this.setState({latestHistoryList: newBrowserHistoryList, isTrue: true})
    } else {
      this.setState({latestHistoryList: newBrowserHistoryList})
    }
  }

  onSearchInput = m => {
    this.setState({searchInput: m.target.value})
  }

  render() {
    const {searchInput, latestHistoryList} = this.state
    let {isTrue} = this.state
    const newBrowserHistoryList = latestHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newBrowserHistoryList.length === 0) {
      isTrue = true
    }

    return (
      <div className="main-bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="image-logo"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />

            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="main-content-container">
          {!isTrue && (
            <ul className="inner-container">
              {newBrowserHistoryList.map(eachObj => (
                <li key={eachObj.id} className="total-items-card">
                  <p className="main-para-timer">{eachObj.timeAccessed}</p>
                  <div className="main-icon icon-delete-holder">
                    <img
                      src={eachObj.logoUrl}
                      className="logo-card-element"
                      alt="domain logo"
                    />
                    <div className="logo-card-container">
                      <p className="app-name">{eachObj.title}</p>
                      <p className="app-website">{eachObj.domainUrl}</p>
                    </div>
                    <button
                      type="button"
                      data-testid="delete"
                      className="delete-button"
                      onClick={() => this.totalMainFunction(eachObj.id)}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="delete-logo"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {isTrue && (
            <div className="empty-container">
              <p className="empty-para">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
