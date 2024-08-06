import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, children, onClose, customStyles = {} }) => {
  const theme = useTheme(); // Hook to access the current theme

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
  };

  const mergedStyles = {
    container: {
      borderRadius: '4px',
      border: `1px solid ${theme.palette.divider}`,
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      ...customStyles.container,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
      ...customStyles.header,
    },
    codeContainer: {
      flexGrow: 1,
      overflow: 'auto',
      ...customStyles.codeContainer,
    },
  };

  return (
    <Box sx={mergedStyles.container}>
      <Box sx={mergedStyles.header}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CodeIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {language ? `${language} code` : 'Code'}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={handleCopy} size="small">
            <ContentCopyIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onClose} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={mergedStyles.codeContainer}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          wrapLines={true}
          customStyle={{
            margin: 0,
            padding: '16px',
            height: '100%',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeBlock;
