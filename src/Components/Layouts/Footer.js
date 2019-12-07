import React, {Fragment} from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core';

const styles = {
  Paper: {
    width: 800,
    overflowX: 'auto'
  }
}


const Footer = ({muscles, onSelect, category}) => {

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onIndexSelect = (e, index) => {
    return(
      onSelect(index === 0 ? '' : muscles[index - 1])
    )
  }

  return (
    <Paper>
      <Fragment>
        <Tabs
          value={index}
          indicatorColor="primary"
          textColor="primary"
          onChange={onIndexSelect}
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
