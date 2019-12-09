import React, {Component}from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'
import Create from '../Exercises/Dialogs/Create'

class Header extends Component{
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" color="inherit" style={{flex: 1}}>
            News
          </Typography>
          <Create/>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;
