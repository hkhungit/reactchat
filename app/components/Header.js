import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { observer } from 'mobx-react'

import FlatButton from 'material-ui/FlatButton';

import UserStore  from '../stores/User'
import Auth   from '../stores/Auth'

@observer
class Header extends Component {
  renderUser() {
    if (!UserStore.uid) 
      return <p> Hello Guest </p>

    return (
      <div>
        Hello: { UserStore.displayName}
        <FlatButton label="Log out" primary={true} onClick={() => Auth.signOut()}/>
      </div>
    )
  }

  render() {
    return (
      <Flexbox element="header" height="60px" marginBottom="40px"> 
        {this.renderUser()}
      </Flexbox>
    );
  }
}

export default Header