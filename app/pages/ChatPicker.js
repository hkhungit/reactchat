import React, { Component } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import { observer } from 'mobx-react'


@observer
class ChatPicker extends Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
  }

  onSignIn(){

  }
  
  onSignUp(){

  }

  render() {

    return (
      <div className="chat-picker">
        <Header />
        <Login />
      </div>
    )
  }
}

ChatPicker.contextTypes = {
  router: React.PropTypes.object
}


export default ChatPicker;