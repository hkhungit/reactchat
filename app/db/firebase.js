import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

import config from '../config'

firebase.initializeApp(config);

export const database = firebase.database()
export const storage = firebase.storage()
export const auth = firebase.auth()