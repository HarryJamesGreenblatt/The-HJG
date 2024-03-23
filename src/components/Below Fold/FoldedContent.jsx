import { Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function FoldedContent({commaDelimitedHeading, children}){

    const heading = commaDelimitedHeading
        .split(',')
        .map(phrase => phrase.toLowerCase());


    // The return statement of the Fold component
    return(

        // The Box component acts as a container for the entire component
        // The sx prop is used for styling the Box component
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                {/* The Typography components are used to display text */}
                <Typography
                    sx={{ 
                        fontFamily: 'Miltonian', 
                        fontSize: {xs:'1.4em', sm:'1.75rem'}, 
                        marginRight: '1rem',
                        textTransform: 'lowercase' ,
                    }}
                >
                    {heading[0]}
                </Typography>
                <Typography 
                    sx={{ 
                        textTransform: 'lowercase',
                        fontFamily: 'Leckerli One',
                        marginRight: '1.25rem',
                        fontSize: {xs:'1.65em', sm:'2rem'}, 
                    }}
                >
                    {heading[1]}
                </Typography>
                <Typography 
                    sx={{ 
                        fontFamily: 'Miltonian', 
                        fontSize: {xs:'1.4em', sm:'1.75rem'}, 
                        textTransform: 'lowercase' ,
                    }}
                >
                    {heading[2]}
                </Typography>
            </Box>

            {/* The Box component acts as a container for the Child components */}
            <Box
                className='folded-content-container'
                sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-evenly',
                    flexGrow: 1,
                    flexWrap: 'wrap'    ,
                    height: '80dvh',
                    width: '100%',
                    overflow: 'hidden'
                }}
            >
                { children }
            </Box>
        </>
    )
}

