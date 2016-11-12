import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'animate.css'

import './assets/css/style.scss'

import Main from './pages/Main'
import NotFound from './pages/NotFound'

injectTapEventPlugin();

const Root = () =>{
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Main} />
          <Miss component={ NotFound } />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

render(<Root />, document.querySelector('#root'))