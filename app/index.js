import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './assets/css/style.css'

import Main from './pages/Main'
import NotFound from './pages/NotFound'

injectTapEventPlugin();

const Root = () =>{
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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