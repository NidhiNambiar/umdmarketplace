import { createTheme } from "@mui/material/styles";

const fontFamily = [
    '"Outfit"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans"',
    'Meiryo',
    '"LiHei Pro"',
    '"STHeiti"',
    '"Yu Gothic"',
    '"SimHei"',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
]

const theme = createTheme({
    typography: {
        fontFamily: fontFamily.join(','),
        useNextVariants: true, // Immediate switch to typography v2
        h1: {
            fontSize: '5.625rem',
            fontWeight: 900,
            letterSpacing: -1.5,
            lineHeight: 1.4222,
            color: 'inherit',
        },
        h2: {
            fontSize: '3.625rem',
            fontWeight: 700,
            letterSpacing: -0.5,
            lineHeight: 1.379,
            color: 'inherit',
        },
        h3: {
            fontSize: '2.875rem',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 1.391,
            color: 'inherit',
        },
        h4: {
            fontSize: '2.0rem',
            fontWeight: 700,
            letterSpacing: 0.25,
            lineHeight: 1.5,
            color: 'inherit',
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 600,
            letterSpacing: 0,
            lineHeight: 1.3334,
            color: 'inherit',
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: 0.25,
            lineHeight: 1.6,
            color: 'inherit',
        },
        subtitle1: {
            fontSize: '1.0rem',
            fontWeight: 700,
            letterSpacing: 0.15,
            lineHeight: 1.875,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: 0.1,
            lineHeight: 1.714,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        body1: {
            fontSize: '1.0rem',
            fontWeight: 400,
            letterSpacing: 0.5,
            lineHeight: 1.875,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: 0.25,
            lineHeight: 1.714,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: 1.25,
            lineHeight: 1.142,
            color: 'inherit',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: 0.4,
            lineHeight: 1.333,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
    },
    palette: {
        type: 'light',
        primary: {
            thin: '#f9d1d6',
            xLight: '#f3a3ad',
            light: '#e8465c',
            main: "#e52f47",
            dark: '#880e1f',
        },
        secondary: {
            light: '#3FA5EC',
            main: '#147BC2',
            dark: '#0D5485',
        },
        light: {
            light: '#F9FBFF',
            main: '#D5DFF2',
            dark: '#B3C4E6',
        },
        dark: {
            light: '#6B84AE',
            main: '#3C4A62',
            dark: '#353541',
        },
        error: {
            light: '#FC8F8F',
            main: '#FC4343',
            dark: '#AE2E2E',
        },
        background: {
            default: 'transparent',
        },
        common: {
            black: '#000',
            white: '#FFF',
        },
        text: {
            primary: '#353541',
            secondary: '#85888C',
            disabled: '#A8AAAD',
            hint: '#00CB4D',
        },
        grey: {
            xLight: '#F9F9F9',
            light: '#DCDDDE',
            main: '#85888C',
            dark: '#4A4D4F',
            50: '#F6F6F7',
            100: '#EDEEEE',
            200: '#DCDDDE',
            300: '#CBCCCE',
            400: '#B9BBBD',
            500: '#A8AAAD',
            600: '#96999C',
            700: '#85888C',
            800: '#74777B',
            900: '#636669',
            A100: '#4A4D4F',
            A200: '#3A3C3D',
            A400: '#292B2C',
            A700: '#191A1A',
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
    }
});

export default theme;