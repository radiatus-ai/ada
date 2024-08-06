import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

function ProjectCard({ project }) {
  return (
    <Box flexBasis="50%" display="flex" justifyContent="flex-end">
      <Box
        width="100%"
        height="100%"
        bgcolor="grey.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Paper elevation={3} style={{ padding: '16px' }}>
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">Provider</Typography>}
                secondary={
                  <Typography variant="body1">{project.provider}</Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">Model</Typography>}
                secondary={
                  <Typography variant="body1">
                    {project.provider_model}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
}

export default ProjectCard;
