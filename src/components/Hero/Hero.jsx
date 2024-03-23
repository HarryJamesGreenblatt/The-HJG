import { Box } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TechNewsArticles from "./TechNewsArticles";
import Intro from "./Intro";


export default function Hero({jsonData, expanded, handleChange}){

    return(
        <>
            {/* The Intro component is rendered here */}
            <Intro expanded={expanded}/>

            {/* Box component containing the Tech News accordion */}
            <Box
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: '100%',
                    width: { xs: '100%', sm: '50%' }, // takes up full width on small screens, 50% on larger screens
                    justifyContent: { xs:'flex-start', sm: 'center' },
                    marginTop: {xs: '0', sm: expanded ? '0' : '0'},
                    order: {xs: '1', sm: '1' },
                    transition: '1s ease-in-out'
                }}
            >

                {/* Accordion component for the tech news articles */}
                <Accordion 
                    expanded={expanded === 'panel1'} 
                    onChange={handleChange('panel1')}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography 
                            variant="h5"
                            sx={{
                                margin: 'auto'
                            }}
                        >
                            Today in Tech
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails 
                        sx={{ 
                            overflow: 'auto', 
                            maxHeight: "73dvh",
                            ':-webkit-scrollbar': {
                                display: 'none'
                            },
                            scrollbarWidth: 'none'  /* Firefox */
                        }}
                    >
                        {/* Box component for the grid of articles */}
                        <Box sx={{ overflow: 'auto', flexGrow: 1, width: '100%' }}>

                            <Grid container spacing={2}>
                                <TechNewsArticles jsonData={jsonData}/>
                            </Grid>

                        </Box>
                    </AccordionDetails>
                    
                </Accordion>
            </Box>
        </>
    )
}
