// super useful notes
// https://mui.com/material-ui/customization/default-theme/
import { createTheme } from '@mui/material/styles';

const commonTypography = {
  fontSize: 14,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontSize: '2.125rem', fontWeight: 600 }, // Larger and bolder for headings
  h2: { fontSize: '1.75rem', fontWeight: 600 },
  h3: { fontSize: '1.5rem', fontWeight: 600 },
  h4: { fontSize: '1.25rem', fontWeight: 600 },
  h5: { fontSize: '1rem', fontWeight: 600 },
  h6: { fontSize: '0.875rem', fontWeight: 600 },
};

const commonComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 300,
        fontSize: '0.875rem',
        padding: '6px 16px',
      },
      sizeSmall: {
        fontSize: '0.8125rem',
        padding: '4px 10px',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: '16px',
        borderBottom: '1px solid rgba(224, 224, 224, 1)', // Light border color for light mode
      },
      head: {
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)', // Consistent hover color
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '16px',
        '&:last-child': {
          paddingBottom: '16px',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.87)',
          },
        },
      },
    },
  },
};

// todo: incorporate
// const globalStyles = {
//   '*::-webkit-scrollbar': {
//     width: '8px',
//   },
//   '*::-webkit-scrollbar-track': {
//     background: darkMode ? '#1a1a4d' : '#e6e6ff',
//   },
//   '*::-webkit-scrollbar-thumb': {
//     background: darkMode ? '#4d1a4d' : '#ffe6ff',
//     borderRadius: '4px',
//   },
//   '*::-webkit-scrollbar-thumb:hover': {
//     background: theme.palette.primary.main,
//   },
// };

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff5e62', // Inspired by the sun's color
      light: '#ff9966',
      dark: '#c23235',
    },
    secondary: {
      main: '#7b2cbf', // Inspired by the day sky gradient
      light: '#9c4dff',
      dark: '#5a0f8f',
    },
    background: {
      default: '#f0e6ff', // Light purple background
      paper: '#ffffff',
    },
    text: {
      primary: '#2b0054', // Dark purple for primary text
      secondary: '#4a008f',
    },
  },
  typography: {
    ...commonTypography,
  },
  spacing: 8,
  components: {
    ...commonComponents,
    MuiButton: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiButton.styleOverrides.root,
          background: 'linear-gradient(45deg, #ff5e62 30%, #ff9966 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #ff9966 30%, #ff5e62 90%)',
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a0a0ff', // Inspired by the rain color at night
      light: '#c0c0ff',
      dark: '#8080cc',
    },
    secondary: {
      main: '#4040ff', // Darker blue from the night rain
      light: '#6060ff',
      dark: '#2020cc',
    },
    background: {
      default: '#000033', // Deep blue night sky
      paper: '#191970', // Midnight blue
    },
    text: {
      primary: '#ffffff',
      secondary: '#c0c0c0', // Light gray, inspired by the moon color
    },
  },
  typography: {
    ...commonTypography,
  },
  components: {
    ...commonComponents,
    MuiButton: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiButton.styleOverrides.root,
          background: 'linear-gradient(45deg, #4040ff 30%, #a0a0ff 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #a0a0ff 30%, #4040ff 90%)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(160, 160, 255, 0.2)', // Subtle blue border
        },
        head: {
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(160, 160, 255, 0.1)', // Subtle blue hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(160, 160, 255, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.87)',
            },
          },
        },
      },
    },
  },
});

export default lightTheme;
export { darkTheme, lightTheme };
