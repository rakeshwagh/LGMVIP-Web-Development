import UsersCard from "./components/users";
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      users_data: [],
      loading: true
    }


    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then(response => response.json())
      .then((users) => {

        this.setState({
          users_data: users.data,
          loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <>
        <nav className="container">
          <div className="box">
            <div className="">
              <div className="column1">
                <h2 className="logo">Let's Grow More</h2>
              </div>
              <div className="column2">
                <button onClick={this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
          <div className="box2">
            <UsersCard loading={this.state.loading} users={this.state.users_data} />
          </div>
        </nav>
      </>
    )
  }
}

export default App;