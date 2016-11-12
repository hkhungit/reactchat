import React, { Component } from 'react';

import Emojis  from '../../db/emoji'

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive(){
    this.setState({isActive: !this.state.isActive})
  }

  renderEmoji(emoji, key) {
    return <span key={key} onClick={() => this.props.onEmoji(emoji.emoji)}> {emoji.emoji}</span>
  }

  render() {
    const props = {}
    props.className = this.state.isActive ? 'emojis-box' : 'emojis-box deactive'
    return (
      <div {...props}>
        { Emojis.map(this.renderEmoji.bind(this))}
      </div>
    );
  }
}

export default Emoji