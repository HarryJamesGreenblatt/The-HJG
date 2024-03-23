import { useState } from 'react';
import { Box, Fade, Slide, Zoom } from "@mui/material";
import Hero from "../components/Hero/Hero";
import FoldedSections from '../components/Below Fold/FoldedSections';


export default function Home({jsonData}){

    // State for managing the expanded state of the accordion
    // The useState hook is used to create a state variable (expanded) and a function to update it (setExpanded)
    const [expanded, setExpanded] = useState(false);

    // Function to handle the change of the accordion's expanded state
    // This function is passed as a prop to the Hero component
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(

        // Outermost Box component acting as a container for the entire component
        // The sx prop is used for styling the Box component
        <Box
            className='home-container'
            component='div'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflowY: 'scroll', // to enable scrolling
                height: '100%',
                scrollSnapType: 'y mandatory'
            }}
        
        >
            <Fade 
                in={true} 
                timeout={1500}
            >
                {/* Box component containing the Hero component */}
                {/* The Hero component receives jsonData, expanded, and handleChange as props */}
                <Box
                    className='above-fold-section'
                    component='section'
                    sx={{ 
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }, // stacks on small screens, aligns horizontally on larger screens
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '1100px',
                        height: '100%', // to take up the full height of the viewport
                        marginBottom: '1em',
                        scrollSnapAlign: 'start'
                    }}
                >
                    <Hero 
                        jsonData={jsonData}
                        expanded={expanded}
                        handleChange={handleChange}
                    />
                </Box>
            </Fade>

            <FoldedSections expanded={expanded}/>

        </Box>
    )
}
