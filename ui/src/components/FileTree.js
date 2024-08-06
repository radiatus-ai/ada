import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {
  Box,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import React, { useState } from 'react';

function FileTree({ files, onAddToContext, onRemoveFromContext }) {
  const [hoveredFile, setHoveredFile] = useState(null);

  const theme = useTheme();

  const buildTree = (files) => {
    const tree = {};
    files.forEach((file) => {
      const parts = file.path.split('/');
      let currentLevel = tree;
      for (const part of parts) {
        if (!currentLevel[part]) {
          if (parts.indexOf(part) === parts.length - 1) {
            currentLevel[part] = { ...file };
          } else {
            currentLevel[part] = {};
          }
        }
        currentLevel = currentLevel[part];
      }
    });
    return tree;
  };
  // debugger;

  const renderTree = (data) => {
    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          '& .MuiTreeItem-root': {
            marginTop: '0.5rem',
            padding: '0.25rem',
            // backgroundColor: 'white',
            borderRadius: '0.25rem',
          },
          '& .MuiTreeItem-label': {
            display: 'flex',
            // backgroundColor: theme.palette.background.default,
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem',
          },
          '& .MuiTreeItem-label:hover': {
            backgroundColor: theme.palette.action.hover,
            borderRadius: '0.25rem',
          },
          '& .MuiTreeItem-iconContainer': {
            marginRight: '0.25rem',
          },
        }}
      >
        {Object.keys(data).map((name) => {
          const isFile =
            typeof data[name] === 'object' &&
            Object.keys(data[name]).length === 5;

          return (
            <TreeItem
              itemId={name}
              key={name}
              nodeId={name}
              label={
                <Box
                  display="flex"
                  alignItems="center"
                  onMouseEnter={() => setHoveredFile(data[name])}
                  onMouseLeave={() => setHoveredFile(null)}
                >
                  {isFile &&
                    (data[name].added_to_context ? (
                      hoveredFile && hoveredFile.path === data[name].path ? (
                        <Tooltip title="Remove from context">
                          <IconButton
                            size="small"
                            onClick={() => onRemoveFromContext(data[name].path)}
                          >
                            <RemoveCircleIcon sx={{ color: 'red' }} />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip title="Added to context">
                          <IconButton size="small">
                            <CheckCircleIcon sx={{ color: 'green' }} />
                          </IconButton>
                        </Tooltip>
                      )
                    ) : (
                      <Tooltip title="Add to context">
                        <IconButton
                          size="small"
                          onClick={() => onAddToContext(data[name].path)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                    ))}
                  <Typography variant="body2">{name}</Typography>
                </Box>
              }
            >
              {typeof data[name] === 'object' &&
                Object.keys(data[name]).length !== 5 &&
                renderTree(data[name])}
            </TreeItem>
          );
        })}
      </TreeView>
    );
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1rem',
        margin: '1rem',
        borderRadius: '0.5rem',
        maxHeight: '70vh',
        overflowY: 'auto',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {renderTree(buildTree(files))}
    </Paper>
  );
}

export default FileTree;
