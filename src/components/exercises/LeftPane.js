import React, { Fragment } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton } from '@material-ui/core'; 
import { Delete, Edit } from '@material-ui/icons';

export default function LeftPane({ 
  styles, 
  exercises, 
  category, 
  onSelect, 
  exercise, 
  onDelete, 
  onSelectEdit 
}) {
  
  return (
    <Grid item className={styles.item} xs={12} sm={6}>
      <Paper className={styles.paper}>
        {exercises.map( ([group, exercises]) => 
          !category || category === group ?
            <Fragment key={group}>
              <Typography 
              variant='h4'
              style={{textTransform: 'capitalize'}}
              color='secondary'
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map( ({ id, title }) =>
                  <ListItem
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText 
                      primary={ title } 
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </Fragment>
          :
            null
        )}
      </Paper>
    </Grid>
  );
}