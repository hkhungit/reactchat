import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import config from '../config'

firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()