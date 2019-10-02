import React from 'react';
import { Paper, Tabs, withWidth } from '@material-ui/core';
import Tab  from '@material-ui/core/Tab';

export default withWidth() (function Footer ({ muscles, onSelect, category, width }) {
  const index = category ?
  muscles.findIndex(group => group === category) + 1 : 0;

  const onIndexSelect = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1]);

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== 'xs'}
        scrollable={width === 'xs'? toString(true) : undefined}
        onChange={onIndexSelect}
      >
        <Tab label='All' />
        {
          muscles.map(group => <Tab key={group} label={group} />
          )
        }
      </Tabs>
    </Paper>
  );

})