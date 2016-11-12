import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import UserStore  from '../../stores/User'
import Chat  from '../../stores/Chat'
import randomstring from 'randomstring'

class Item extends Component {
  renderImage(url){
    const photoURL = url.photoURL ? url.photoURL : 'http://www.askcolleenking.com/themes/default/images/loading.gif'
    return <img alt="" src={photoURL} style={{width: '100px', height: '100px'}} />
  }

  render() {
    const { message } = this.props
    const user = Chat.getUser(`user-${message.sender}`) || {}
    const cls = (UserStore.uid === user.uid) ? 'me' : 'them'

    return  (
      <div className={`message-wrapper ${cls}`}>
        <Avatar className="circle-wrapper animated bounceIn" src={user.photoURL}/>
        <div className="text-wrapper animated fadeIn">
          {("url" in message) && this.renderImage(message.url)} 
          {message.content && message.content.split('\n').map(e => <p key={`${Date.now()}-${randomstring.generate(10)}`}> {e}</p>)}
        </div>      
      </div>
    )
  }
}

export default Item