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

const Exercises = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
  }) =>
  {
  return(
    <Grid container>

      {/* Left Pane */}

      <Grid item sm style={styles.Grid}>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises], id) => (
            !category || category === group
            ? <Fragment key={id}>
                <Typography
                  variant = "h6"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List>
                  {exercises.map(({id, title}) => (
                    <ListItem
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText
                        key={id}
                        primary={title}
                      />
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
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises
