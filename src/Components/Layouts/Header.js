import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'


function Header() {
  return (
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6">
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
  );
}

export default Header;
