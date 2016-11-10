import React, { Component } from 'react'

import UserStore  from '../../stores/User'
import Message  from '../../stores/Message'
import Chat  from '../../stores/Chat'

export default class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const content = this.input.value
    if (content === '' || !content)
      return

    const message = {
      content,
      sender: UserStore.uid
    }
    
    this.formChat.reset()
    Chat.addUser(UserStore)
    Message.addMessage(message)
  }

  render() {
    return (
      <form ref={form => this.formChat = form} className="component-login" onSubmit={this.onSubmit}>
        <div className="write">
          <a className="write-link attach"></a>
          <input type="text" ref={ref => this.input = ref}/>
          <a className="write-link smiley"></a>
          <a className="write-link send" onClick={this.onSubmit}></a>
        </div>
      </form>
    )
  }
}
