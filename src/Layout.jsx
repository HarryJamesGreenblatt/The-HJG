import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Define the Layout component
export default function Layout() {

    return (
        <Box
            className="app-container" 
            component='div'
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '100dvh',
                width: '100%',
                maxWidth: '1100px',
                background: '#150f1a',
                margin: 'auto' 
            }}
        >
            {/* Render the Header component */}
            <Header />

            {/* Render the Outlet component inside a Box */}
            {/* The Outlet component will render the child routes */}
            <Box 
                className="main-content-container"
                component="main"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80dvh',
                    maxWidth: '1100px',
                    margin: 'auto',
                }}  
            >
                <Outlet/>
            </Box>

            {/* Render the Footer component */}
            <Footer />
            
        </Box>
    )
}
