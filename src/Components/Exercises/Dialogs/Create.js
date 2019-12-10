import React, { Component } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


export default class Create extends Component {

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    const { open } = this.state;

    return (
      <>
        <Button aria-label="add" onClick={this.handleToggle} style={{maxWidth: '30px'}}>
          <Fab color="secondary" aria-label="add" size="small">
            <AddIcon />
          </Fab>
        </Button>

        <Dialog
          open={open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}
