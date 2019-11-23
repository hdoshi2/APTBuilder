import React from 'react'
import {Grid} from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';


const styles = {
  Grid: {
    padding: 5
  },
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

const Exercises = (props) => {
  return(
    <Grid container>
      <Grid item sm style={styles.Grid}>
        <LeftPane sx={styles}/>
      </Grid>
      <Grid item sm style={styles.Grid}>
        <RightPane sx={styles}/>
      </Grid>
    </Grid>
  )
}

export default Exercises
