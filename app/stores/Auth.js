import { auth } from '../db/firebase'

import UserStore from './User'

class Auth {
  constructor() {
    this.authHandler = this.authHandler.bind(this)
  }

  onAuthStateChanged() {
    auth.onAuthStateChanged((user) => {
      if (user){
        this.authHandler({user})
      }
    })
  }

  authHandler(user) {
    UserStore.logedIn(user.user)
  }

  authenticate(provider){
    auth.signInWithPopup(provider).then(this.authHandler)
  }

  signOut(){
    auth.signOut()
    UserStore.logedOut()
  }

  currentUser() {
    return auth.currentUser
  }

  auth() {
    return auth
  }
}

export default new Auth();