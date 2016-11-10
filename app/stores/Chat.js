import { observable } from 'mobx'
import { database } from '../db/firebase'

class Chat {
  @observable users = {}

  constructor() {
    database.ref(`chats`).on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        this.users = snapshot.val()
      }
    })
  }

  getUser(key){
    return this.users[key]
  }

  addUser(user) {
    const key = 'user-' + user.uid
    this.users = {
      ...this.user,
      [key]: user
    }
    database.ref(`/chats/${key}`).set(user)
  }

  removeMessage(key) {
    delete this.users[key]
    this.users = this.users
    database.ref(`/chats/${key}`).remove()
  }
}

export default new Chat();