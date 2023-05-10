import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
      light:'#e6f7ff',
      contrastText:"#fff",
    },
    secondary: {
      main: "#4caf50",
      light:'#dcefdc',

      contrastText:"#fff",

    },
    error:{
      main:"#d32f2f",
      light:'##f6d5d5',
      contrastText:"#fff",
    },
    warning:{
      main:"#ed6c02",
      light:' #fed5b3',
      contrastText:"#fff",

    },
    success:{
      main:"#2e7d32",
      light:'	 #daf1db',
      contrastText:"#fff",


    },
 
  },
  typography:{
    h1: {
        fontWeight: 600,
        fontSize: '2.375rem',
        lineHeight: 1.21
    },
    h2: {
        fontWeight: 600,
        fontSize: '1.875rem',
        lineHeight: 1.27
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.33
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4
    },
    h5: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5
    },
    h6: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.57
    },
    caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66
    },
    body1: {
        fontSize: '0.875rem',
        lineHeight: 1.57
    },
    body2: {
        fontSize: '0.75rem',
        lineHeight: 1.66
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: 1.57
    },
    subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 500,
        lineHeight: 1.66
    },
    overline: {
        lineHeight: 1.66
    },
    button: {
        textTransform: 'capitalize'
    }
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          borderBottom: " 1px solid",
          borderColor: "rgba(254, 79, 21, 0.2)",
          background:"red",
          letterSpacing: "0.0075em",
          fontWeight: "500",
          lineHeight: "1.5em",
          color: "#121926",
          fontFamily: "Roboto,Helvetica,Arial,sansSerif",
          fontSize: "1.3rem",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid",
          borderRight: "1px solid",
          borderColor: "goldenrod",
          background: "lemonchiffon",
          color: "black",
          fontSize: "15px",
          fontWeight: "600",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          paddingY: "5px",
          textAlign: "center",
        },
      },
    },
});



theme = responsiveFontSizes(theme);
export default theme;
