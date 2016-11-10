import { observable } from 'mobx'
import { database } from '../db/firebase'

class Message {
  @observable messages = {}

  constructor() {
    database.ref(`messages`).on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        this.messages = snapshot.val()
      }
    })
  }

  addMessage(message, sender) {
    const timestamp = Date.now()
    const messageId = `message-${timestamp}`
    this.messages = {
      ...this.messages,
      [messageId]: message
    }
    
    database.ref(`/messages/${messageId}`).set(message)
  }

  removeMessage(key) {
    delete this.messages[key]
    this.messages = this.messages
    database.ref(`/messages/${key}`).remove()
  }
}

export default new Message();