import React, { Component } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    width: 300
  }
})


class Create extends Component {

  state = {
    open: false,
    exerciseForm: {
      title: "",
      description: "",
      muscles: ""
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exerciseForm: {
        ...this.state.exerciseForm,
        [name]: value
      }
    })
  }

  handleSubmit = () => {

    const { exerciseForm } = this.state
    console.log(exerciseForm)
    this.props.onCreate({
      ...exerciseForm,
      id: exerciseForm.title.toLocaleLowerCase(/ /g, '-')
    })

    this.setState({
      open: false,
      exerciseForm: {
        title: "",
        description: "",
        muscles: ""
      }
    })
  }


  render() {
    const { open, exerciseForm: { title, description, muscles } } = this.state;
    const { classes, muscles: categories } = this.props;
    return (
      <>
        <Button
          aria-label="add"
          onClick={this.handleToggle}
          style={{ maxWidth: '30px' }}
        >
          <Fab color="secondary" aria-label="add" size="small">
            <AddIcon />
          </Fab>
        </Button>

        <Dialog
          open={open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Subscribe
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <TextField
              label="Title"
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
              className={classes.formControl}
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="muscles">
                Muscles
            </InputLabel>
              <Select
                native
                value={muscles}
                onChange={this.handleChange('muscles')}
              >
                <option value={""}>
                </option>
                {categories.map((category, id) => (
                  <option value={category} key={id}>
                    {category}
                  </option>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Description"
              multiline
              value={description}
              onChange={this.handleChange('description')}
              margin="normal"
              rowsMax="4"
              className={classes.formControl}
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default withStyles(styles)(Create)
