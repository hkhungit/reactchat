import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import UserStore  from '../../stores/User'
import Chat  from '../../stores/Chat'
import randomstring from 'randomstring'

class Item extends Component {
  render() {
    const { message } = this.props
    const user = Chat.getUser(`user-${message.sender}`) || {}

    if (UserStore.uid === user.uid)
      return (
        <div className="message-wrapper me">
          <Avatar className="circle-wrapper animated bounceIn" src={user.photoURL}/>
          <div className="text-wrapper animated fadeIn">
            {message.content.split('\n').map(e => <p key={`${Date.now()}-${randomstring.generate(10)}`}> {e}</p>)}
          </div>      
        </div>
      )
    
    return  (
      <div className="message-wrapper them">
        <Avatar className="circle-wrapper animated bounceIn" src={user.photoURL}/>
        <div className="text-wrapper animated fadeIn">
          {message.content.split('\n').map(e => <p key={`${Date.now()}-${randomstring.generate(10)}`}> {e}</p>)}
        </div>      
      </div>
    )
  }
}


export default Item