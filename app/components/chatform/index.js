import React, { Component } from 'react'
import randomstring from 'randomstring'

import Emoji  from '../emojis'
import UserStore  from '../../stores/User'
import Message  from '../../stores/Message'
import Chat  from '../../stores/Chat'

import { storage }  from '../../db/firebase'


export default class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.onEmoji = this.onEmoji.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCamera = this.onCamera.bind(this)
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

  onCamera(e){
    this.inputRef.click();
    const storageRef = storage.ref();
    this.inputRef.onchange = (e)=> {
      const file = e.target.files[0]
      if (file){
        Chat.addUser(UserStore)
        const imageId = `${Date.now()}-${randomstring.generate(20)}`
        const messageId = Message.addMessage({ url: {id: imageId}, sender: UserStore.uid })

        storageRef.child(`images/${imageId}`).put(file).then((snapshot) =>{
          Message.updateMessage(messageId, {url: {id: imageId, photoURL: snapshot.downloadURL}})
        })
        this.formChat.reset()
      }
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
          <div key={1} className="camera"  ref={ref => this.cameraRef = ref} onClick={this.onCamera}></div>
          <input type="file" style={{display: 'none'}} accept="image/*" ref={ref => this.inputRef = ref} />
          <div key={2} className="emoji" onClick={() => this.emojiRef.toggleActive()}></div>
          <div key={3} className="send" onClick={this.onSubmit}></div>
        </div>
      </form>
    )
  }
}
