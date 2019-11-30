import React, {Fragment} from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core';

const styles = {
  Paper: {
    width: 800,
    overflowX: 'auto'
  }
}


const Footer = ({muscles}) => {
  return (
    <Paper>
      <Fragment>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
          // variant="scrollable"
          // scrollButtons="auto"
        >
        <Tab label="All" />
          {muscles.map((e) => {
            return(
              <Tab key={e.id} label={e}/>
            )
          })}
        </Tabs>
      </Fragment>
    </Paper>
  );
}

export default Footer
