import { observable } from 'mobx'

class User {
  @observable uid = null
  @observable email = null
  @observable photoURL = null
  @observable displayName = null
  @observable refreshToken = null

  logedIn(user) {
    this.uid = user.uid
    this.email = user.email
    this.photoURL = user.photoURL
    this.displayName = user.displayName
    this.refreshToken = user.refreshToken
  }

  logedOut(){
    this.uid = null
    this.email = null
    this.photoURL = null
    this.displayName = null
    this.refreshToken = null
  }
}

export default new User();