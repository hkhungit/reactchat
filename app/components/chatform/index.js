import React, { Component } from 'react'

import Emoji  from '../emojis'
import UserStore  from '../../stores/User'
import Message  from '../../stores/Message'
import Chat  from '../../stores/Chat'
import styles from './style'

import { storage }  from '../../db/firebase'


export default class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.onEmoji = this.onEmoji.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onKeydown = this.onKeydown.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const content = this.messageRef.value
    if (content === '' || !content)
      return

    const message = {
      content,
      sender: UserStore.uid
    }
    
    this.formChat.reset()
    Chat.addUser(UserStore)
    Message.addMessage(message)
    this.onDeactiveEmoji()
  }

  onDeactiveEmoji(){
    const { isActive } = this.emojiRef.state
    if (isActive)
      this.emojiRef.setState({isActive: false})
  }

  onKeydown(e){
    let key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault()
      this.onSubmit(e)
    }
  }

  onEmoji(emoji){
    this.messageRef.value += emoji
  }

  render() {
    return (
      <form ref={form => this.formChat = form} onSubmit={this.onSubmit}>
        <div className="bottom">
          <Emoji onEmoji={this.onEmoji} ref={ref => this.emojiRef = ref}/>
          <textarea className="input" ref={ref => this.messageRef = ref} onKeyDown={this.onKeydown}></textarea>
          <div key={2} className="emoji" onClick={this.onSubmit}></div>
          <div key={3} className="send" onClick={this.onSubmit}></div>
        </div>
      </form>
    )
  }
}
