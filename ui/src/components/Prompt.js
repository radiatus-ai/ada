// PromptPresentation.js
import { Close as CloseIcon, Send as SendIcon } from '@mui/icons-material';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import CodeBlock from './common/CodeBlock';
import DotsLoading from './common/DotsLoading';
import History from './History';

const PromptPresentation = ({
  prompt,
  responses,
  loading,
  promptError,
  error,
  snackbarOpen,
  isCodeExpanded,
  selectedCode,
  handleSubmit,
  handlePromptChange,
  handleSnackbarClose,
  handleCodeExpand,
  handleCodeSelected,
  handleCloseCodeBlock,
}) => {
  const { darkMode } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: 'calc(100vh - 64px)',
        justifyContent: isCodeExpanded ? 'flex-start' : 'center',
        background: darkMode
          ? 'linear-gradient(to bottom right, #000033, #330033)'
          : 'linear-gradient(to bottom right, #e6e6ff, #ffe6ff)',
        transition: 'background 0.5s ease-in-out',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          flexBasis: isCodeExpanded ? (isCodeExpanded ? '60%' : '40%') : '60%',
          maxWidth: isCodeExpanded ? (isCodeExpanded ? '60%' : '40%') : '60%',
          display: 'flex',
          flexDirection: 'column',
          p: isMobile ? 0 : 2,
          [theme.breakpoints.down('sm')]: {
            flexBasis: '100%',
            maxWidth: '100%',
            height: isCodeExpanded ? '50%' : '100%',
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            flexGrow: 1,
            mb: 2,
            overflow: 'auto',
            background: darkMode
              ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
              : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
            transition: 'background 0.5s ease-in-out',
          }}
        >
          <History
            responses={responses}
            loading={loading}
            prompt={loading ? prompt : ''}
            selectedCode={selectedCode}
            onCodeExpand={handleCodeExpand}
            onCodeSelected={handleCodeSelected}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{
            // p: 2,
            // borderRadius: 2,
            background: darkMode
              ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
              : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
            transition: 'background 0.5s ease-in-out',
          }}
        >
          <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                value={prompt}
                onChange={handlePromptChange}
                placeholder={loading ? 'Loading...' : 'Enter your query'}
                fullWidth
                margin="normal"
                onKeyPress={handleKeyPress}
                error={promptError}
                helperText={promptError && 'Please enter a prompt'}
                disabled={loading}
                sx={{
                  backgroundColor: darkMode
                    ? 'rgba(54, 54, 53, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  // borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 0, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 0, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: theme.palette.text.primary,
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.palette.text.secondary,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {loading ? (
                        <DotsLoading />
                      ) : (
                        <IconButton
                          onClick={handleSubmit}
                          size="small"
                          edge="end"
                          sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: 'rgba(255, 0, 255, 0.1)',
                            },
                          }}
                        >
                          <SendIcon />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {isCodeExpanded && (
        <Paper
          elevation={3}
          sx={{
            flexBasis: isCodeExpanded ? '40%' : '60%',
            height: isMobile ? '50%' : '100%',
            overflow: 'auto',
            background: darkMode
              ? 'linear-gradient(45deg, #1a1a4d 30%, #4d1a4d 90%)'
              : 'linear-gradient(45deg, #e6e6ff 30%, #ffe6ff 90%)',
            transition: 'background 0.5s ease-in-out',
            [theme.breakpoints.down('sm')]: {
              flexBasis: '100%',
              width: '100%',
            },
          }}
        >
          <CodeBlock
            language={selectedCode.language}
            onClose={handleCloseCodeBlock}
          >
            {selectedCode.content}
          </CodeBlock>
        </Paper>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={error}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default PromptPresentation;
