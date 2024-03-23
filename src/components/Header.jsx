// Import necessary hooks, components, and utilities
import { useState } from "react";
import { AppBar, Tabs, Tab, Box, Divider, useMediaQuery, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import useResponsiveText from "../hooks/useResponsiveText";
import { sections } from "../utils";
import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";

// Define the Header component
export default function Header() {

    // Use the useLocation hook from react-router-dom to get the current location
    const location = useLocation();

    // Initialize a state variable 'value' with the current pathname
    const [value, setValue] = useState(location.pathname);

    // Define a handler for change events
    const handleChange = (event, newValue) => {

        // Update the 'value' state variable with the new value
        setValue(newValue);

    };

    // Use the custom useResponsiveText hook to get the brand logo text
    const brandLogo = useResponsiveText();


    // Use the useTheme and useMediaQuery hooks from Material-UI to check if the screen size is small
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    // Initialize a state variable 'drawerOpen' to false
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Define a function to toggle the drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    

    // Map over the sections to create Tab elements
    const tabElements = sections.map( section =>
    <Tab
        // Generate a unique key for each Tab element using nanoid
        key={nanoid()} 

        // Set the label of the Tab to the section name
        label={section} 

        // Use NavLink as the component for the Tab
        component={NavLink}

        // Set the 'to' prop based on the section name
        to={ section === 'Home' ? '/' : `/${section.toLowerCase()}`}

        // Set the 'value' prop based on the section name
        value={ section === 'Home' ? '/' : `/${section.toLowerCase()}`}

        // Apply custom styles to the Tab
        sx={{
            fontFamily: 'Frank Ruhl Libre',
            textTransform: 'uppercase',
            fontSize: "1.05rem",
            fontWeight: '300',
            letterSpacing: 1.5
        }} 
    />
    );

    // Return the AppBar component with the brand logo and tabs
    return (
    <AppBar 
        position="static"
        sx={{
            background: 'none'
        }}
    >
        <Box
            sx={{
                display: "flex",
                justifyContent: 'space-between', // Add this line
                width: "100%",
                maxWidth: '1100px',
                margin: 'auto',
                alignItems: "center",
                padding: '.75em 2em',
                transition: '1s ease-in-out'
            }} 
        >

            {/* If the screen size is small */}
            {isSmallScreen ? (
                <>
                    <IconButton 
                        edge="end" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer 
                        anchor="left" 
                        open={drawerOpen} 
                        onClose={toggleDrawer} 
                        variant="temporary" 
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <Close sx={{fontSize:  '1.7rem'}}/>
                            </IconButton>
                        </Box>
                        <List>
                            {tabElements.map((tab, index) => (
                                <ListItem 
                                    button key={index} 
                                    onClick={toggleDrawer}
                                    sx={{justifyContent: 'center'}}
                                >
                                    {tab}
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <Box
                        sx={{
                            display: 'flex',
                            margin: 'auto',
                            transform: 'translate(-.45em, 0)'
                        }}
                    >
                        { brandLogo }
                    </Box>
                </>
            ) : (
                <>
                    {/* If the screen size is not small, display the brand logo and Tabs directly */}
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        { brandLogo }
                    </Box>
                    <Tabs 
                        value={value} 
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        {tabElements}
                    </Tabs>
                </>
            )}
        </Box>

        {/* Divider to separate the AppBar from the rest of the page */}
        <Divider variant="fullWidth"/>
        
    </AppBar>

    );
}
