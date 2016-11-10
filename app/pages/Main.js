import React, { Component } from 'react'
import Flexbox  from 'flexbox-react'
import firebase from 'firebase/app'
import { observer } from 'mobx-react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Messages from '../components/messages'
import ChatForm  from '../components/chatform'

import Auth   from '../stores/Auth'
import UserStore  from '../stores/User'

@observer
class Main extends Component {
  componentWillMount() {
    Auth.onAuthStateChanged()
  }

  renderLogin(){
    return (
      <nav className="login">
        <h2> Login</h2>
        <button className="facebook" onClick={() => Auth.authenticate(new firebase.auth.FacebookAuthProvider())}>Login facebook ↵</button>
        <button className="github" onClick={() => Auth.authenticate(new firebase.auth.GithubAuthProvider())}>Login github ↵</button>
      </nav>
    )
  }

  render() {

    if (!UserStore.uid)
      return(
        <Flexbox flexGrow={1}>
          {this.renderLogin()}
        </Flexbox>
      )

    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Header />
        <Flexbox flexGrow={1} flexDirection="column" maxWidth="400px" alignSelf='center'>
          <Messages />
          <ChatForm />
        </Flexbox>
        <Footer />
      </Flexbox>
    )
  }
}

export default Main;