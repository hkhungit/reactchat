import React, { Component } from 'react';
import { observer } from 'mobx-react'
import {List} from 'material-ui/List';

import Item from './item'
import Message  from '../../stores/Message'

@observer
class Messages extends Component {
  constructor(props) {
    super(props);
    this.renderMessage = this.renderMessage.bind(this)
  }

  renderMessage(key, message) {
    return <Item key={key} message={message} />
  }

  render() {
    const { messages } = Message

    return (
      <List className='list-chats'>
        { Object.keys(messages).reverse().map(key => this.renderMessage(key, messages[key]))}
      </List>
    );
  }
}

export default Messages