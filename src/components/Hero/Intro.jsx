import { Box } from "@mui/system";
import RubiksCube from "../../sketches/RubiksCube";
import { Typography } from "@mui/material";
import myHead from '../../../public/myhead.png';


export default function Intro ({expanded}){
    return(
        <>
            {/* Box component containing the Rubik's Cube, the tagline and the head image */}
            <Box
                className='intro'
                component='div' 
                sx={{ 
                    display: {xs: (expanded ? 'none' : 'flex'), sm:'flex'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', sm: '40%' }, // takes up full width on small screens, 40% on larger screens
                    userSelect: 'none',
                    position: 'relative',
                    bottom: {xs: '-1.5em', sm: '0'},
                    transition: '3s ease-in-out',
                    order: {xs: '2', sm: '2' },
                    height: '80dvh' 
                }}
            >

                {/* Box component for the Rubik's Cube */}
                <Box 
                    sx={{
                        position: 'relative',
                        top: {xs:'10em', sm: '3em'},
                        zIndex: 9,
                        transition: '1s ease-in-out',
                        display: {xs: ( expanded ? 'none'  : 'block' ) , sm: 'block'}
                    }}
                >
                   {!expanded ?  <RubiksCube />  : null}
                </Box>

                {/* Box component for the head image */}
                <Box 
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        top: {xs:'7.8em', sm: '.7em'},
                        right: '.2em',
                        width: '200px',
                        transition: '1s ease-in-out'
                    }}    
                >
                    <img src={myHead} alt="head" className="head" />
                </Box>

                {/* Box component for the text tagline */}
                <Box
                    sx={{
                        position: 'relative',
                        bottom: {xs:'3em', sm: '10em'},
                        transition: '1s ease-in-out'
                    }}
                >
                    <Typography 
                        variant="subtitle1" 
                        component="span" 
                        sx={{ 
                            fontFamily: 'Miltonian', 
                            fontSize: '1.75rem', 
                            marginLeft: '2rem',
                            textTransform: 'lowercase' 
                        }}
                    >
                        A
                    </Typography>
                    <Typography 
                        variant="h5" 
                        component="p" 
                        sx={{ 
                            marginLeft: '.5rem', 
                            textTransform: 'lowercase',
                            fontFamily: 'Leckerli One',
                            fontSize: '2rem'
                        }}
                    >
                        Different Approach
                    </Typography>
                    <Typography 
                        variant="subtitle1" 
                        component="span" 
                        sx={{ 
                            fontFamily: 'Miltonian', 
                            fontSize: '1.75rem',
                            textTransform: 'lowercase',
                            paddingLeft: '0.25em'  
                        }}
                    >
                        To Solving Problems
                    </Typography>
                </Box>
            </Box>

        </>
    )
}