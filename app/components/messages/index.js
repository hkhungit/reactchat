import React, { Component } from 'react';
import { observer } from 'mobx-react'

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
      <div className='content'>
        { Object.keys(messages).reverse().map(key => this.renderMessage(key, messages[key]))}
      </div>
    );
  }
}

export default Messages