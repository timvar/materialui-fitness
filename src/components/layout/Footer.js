import React from 'react';
import { Paper, Tabs, withWidth } from '@material-ui/core';
import Tab  from '@material-ui/core/Tab';
import { compose } from 'recompose';
import { withContext } from '../../context';

function Footer ({ muscles, onCategorySelect, category, width }) {
  
  const onIndexSelect = (e, index) => {
    onCategorySelect(index === 0 ? '' : muscles[index - 1]);
  }

  const getIndex = () => {
    return category ? muscles.findIndex(group => group === category) + 1 : 0;
  }

  return (
    <Paper>
      <Tabs
        value={getIndex()}
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
}

export default compose(withContext, withWidth())(Footer)

