import React, { Component } from 'react'
import firebase from 'firebase/app'
import { observer } from 'mobx-react'

import Messages from '../components/messages'
import ChatForm  from '../components/chatform'

import Auth   from '../stores/Auth'
import UserStore  from '../stores/User'

@observer
class Main extends Component {
  componentWillMount() {
    Auth.onAuthStateChanged()
  }

  render() {

    if (!UserStore.uid)
      return (
        <div className="wrapper">
          <div className="login">
            <p>Login</p>
            <button className="facebook" onClick={() => Auth.authenticate(new firebase.auth.FacebookAuthProvider())}>Login facebook ↵</button>
            <button className="github" onClick={() => Auth.authenticate(new firebase.auth.GithubAuthProvider())}>Login github ↵</button>
          </div>
        </div>
      )

    return (
      <div className="wrapper">
        <nav className="nav">
          <div className="default-nav">
            <div className="main-nav">
              <div className="toggle"></div>
              <div className="main-nav-item">
                <a href="" className="main-nav-item-link">
                  Fwz Chatroom
                </a>
              </div>
              <div className="options">
              </div>
            </div>
          </div>
        </nav>
        <div className="inner">
          <Messages />
        </div>
        <ChatForm />
      </div>
    )
  }
}

export default Main;