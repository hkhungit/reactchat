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

  addMessage(message) {
    const timestamp = Date.now()
    const messageId = `message-${timestamp}`
    this.messages = {
      ...this.messages,
      [messageId]: {
        ...message,
        timestamp
      }
    }
    
    database.ref(`/messages/${messageId}`).set(message)
    return messageId
  }

  updateMessage(messageId, message){
    this.messages = {
      ...this.messages,
      [messageId]: message
    }

    database.ref(`/messages/${messageId}`).update(message)
  }

  removeMessage(key) {
    delete this.messages[key]
    this.messages = this.messages
    database.ref(`/messages/${key}`).remove()
  }
}

export default new Message();