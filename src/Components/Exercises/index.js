import React, { Fragment } from 'react'
import {Grid, Paper, Typography, ListItem, List, ListItemText} from '@material-ui/core';



const styles = {
  Grid: {
    padding: 5
  },
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

const Exercises = ({exercises, category}) => {
  return(
    <Grid container>

      {/* Left Pane */}

      <Grid item sm style={styles.Grid}>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => (
            !category || category === group
            ?<Fragment>
                <Typography
                  variant = "h6"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List>
                  {exercises.map(({id, title}) => (
                    <ListItem button key={id}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            : null
          ))}
        </Paper>
      </Grid>



      {/* Right Pane */}

      <Grid item sm style={styles.Grid}>
        <Paper style={styles.Paper}>
          <Typography variant="h6">
            Welcome!
          </Typography>
          <Typography variant="subtitle1">
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises
