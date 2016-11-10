import React, { Component } from 'react';

import UserStore  from '../../stores/User'
import Chat  from '../../stores/Chat'

class Item extends Component {
  render() {
    const { message } = this.props
    const user = Chat.getUser(`user-${message.sender}`) || {}

    if (UserStore.uid === user.uid)
      return (
        <div className="outner-bubble">
          <div className="bubble me">
            {message.content}
          </div>

          <img src={user.photoURL} alt={user.displayName} className="avatar" />
        </div>
      )
    
    return (
      <div className="outner-bubble you">
        <img src={user.photoURL} alt={user.displayName} className="avatar" />

        <div className="bubble you">
          {message.content}
        </div>
      </div>
    )
  }
}


export default Item