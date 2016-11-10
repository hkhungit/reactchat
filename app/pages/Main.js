import React, { Component } from 'react'
import firebase from 'firebase/app'
import { observer } from 'mobx-react'

import Messages from '../components/messages'
import ChatForm  from '../components/chatform'
import Chats  from '../components/chats'

import Auth   from '../stores/Auth'
import UserStore  from '../stores/User'

@observer
class Main extends Component {
  componentWillMount() {
    Auth.onAuthStateChanged()
  }

  renderLogin(){
    return (
      <div className="login">
        <h2> Login</h2>
        <button className="facebook" onClick={() => Auth.authenticate(new firebase.auth.FacebookAuthProvider())}>Login facebook ↵</button>
        <button className="github" onClick={() => Auth.authenticate(new firebase.auth.GithubAuthProvider())}>Login github ↵</button>
      </div>
    )
  }

  render() {

    if (!UserStore.uid)
      return(
        <div className="container">
          {this.renderLogin()}
        </div>
      )

    return (
      <div className="container">
        <Chats />
        <div className="right">
            <div className="top">
              <span>To: 
                <span className="name">Chat Room</span>
              </span>
              <button style={{float: 'right'}} onClick={() => Auth.signOut()}> Log out </button>
            </div>
            <Messages />
            <ChatForm />
        </div>
      </div>
    )
  }
}

export default Main;