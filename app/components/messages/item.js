import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';


import UserStore  from '../../stores/User'
import Chat  from '../../stores/Chat'

import styles from './style'

class Item extends Component {
  render() {
    const { message } = this.props
    const user = Chat.getUser(`user-${message.sender}`) || {}

    if (UserStore.uid === user.uid)
      return (
        <div style={{...styles.item,...styles.right}}>
          <ListItem primaryText={message.content} disabled style={{...styles.itemInner,...styles.itemRightInner}} rightAvatar={<Avatar style={styles.rightAvatar}src={user.photoURL}/>}/>      
        </div>
      )
    
    return  (
      <div style={{...styles.item,...styles.left}}>
        <ListItem primaryText={message.content} disabled style={{...styles.itemInner,...styles.itemLeftInner}} leftAvatar={<Avatar src={user.photoURL}/>}/>
      </div>
    )
  }
}


export default Item