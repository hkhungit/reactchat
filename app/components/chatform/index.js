import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import UserStore  from '../../stores/User'
import Message  from '../../stores/Message'
import Chat  from '../../stores/Chat'

import styles from './style'

export default class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const content = this.messageRef.getValue()
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
      <form {...styles.form} ref={form => this.formChat = form} className="component-login" onSubmit={this.onSubmit}>
        <TextField
          hintText="Message"
          {...styles.textField}
          ref={ref => this.messageRef = ref}
        />
        <div>
          <RaisedButton type="submit" label="Send" primary={true} onClick={this.onSubmit}/>
        </div>
      </form>
    )
  }
}
