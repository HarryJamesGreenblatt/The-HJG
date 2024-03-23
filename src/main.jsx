import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
      mode: 'dark',
      secondary: {
        main: '#ffffff', // Change this to your desired secondary color
      },
    },
});

ReactDOM.createRoot(document.getElementById('root'))
    .render( 
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/The-HJG/">
                <App /> 
            </BrowserRouter>
        </ThemeProvider>
    );
