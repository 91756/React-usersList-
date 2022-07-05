import {Component} from 'react'
import UserProfile from './component/UserProfile'
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Krishna',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Supriya',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rohan',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Shyalaja',
    role: 'Software Developer',
  },
]
class App extends Component {
  state = {usersList: initialUserDetailsList, searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filteredUserList = searchInput => {
    const {usersList} = this.state
    const filteredData = usersList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredData
  }

  onDeleteUser = uniqueNo => {
    const {usersList} = this.state
    const updateData = usersList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({usersList: updateData})
  }

  render() {
    const {searchInput} = this.state
    const filteredData = this.filteredUserList(searchInput)
    return (
      <div className="list-container">
        <h1>Users List</h1>
        <input type="text" onChange={this.onChangeSearchInput} />
        <ul>
          {filteredData.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
