import React, { Component } from 'react'
import Flexbox from 'flexbox-react'

import Header from '../components/Header'
import Footer from '../components/Footer'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Header />
        <Flexbox flexGrow={1}>
          Content
        </Flexbox>
        <Footer />
      </Flexbox>
    )
  }
}

export default Main;