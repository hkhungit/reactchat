import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Chat  from '../../stores/Chat'

@observer
class Chats extends Component {
  renderChat(key, user) {
    return (
      <li key={key} className="person" data-chat={`user-${key}`}>
        <img src={user.photoURL} alt={user.displayName} />
        <span className="name">{user.displayName}</span>
        <span className="time">00:00 PM</span>
        <span className="preview">..........</span>
      </li>
    )
  }

  render() {
    const { users } = Chat

    return (
      <div className="left">
        <div className="top">
            <input type="text" />
            <a className="search"></a>
        </div>
        <ul className="people">
          { Object.keys(users).map(key => this.renderChat(key, users[key]))}
        </ul>
      </div>
    );
  }
}

export default Chats