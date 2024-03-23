import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { nanoid } from 'nanoid';
import { Fade, Grow } from '@mui/material';

function useResponsiveText() {

// useTheme is a custom React hook that returns the theme object.
// It can be used in a component's render function to read the current theme.
const theme = useTheme();

// useMediaQuery is a custom React hook that matches the current screen size 
// against a Material-UI breakpoint (or any valid CSS media query string) and 
// returns true if the screen size matches the breakpoint and false otherwise.
// In this case, it checks if the screen width matches the 'sm' breakpoint or larger.
const matches = useMediaQuery(theme.breakpoints.up('md'));


// Define an array of strings that make up the name "Harry James Greenblatt"
const typographyElements = ["h", "arry", "J", "ames", "g", "reenblatt"].map( typography => 

    // For each string in the array, create a Typography component
    <Typography 
    
        // Generate a unique key for each Typography component using nanoid
        key={nanoid()}

        // Apply custom styles to the Typography component
        sx={{
            fontSize      : typography.length > 1 ? '1.4rem'   : '2.5rem',
            marginRight   : typography.length > 1 ? '.75rem'   : '0',
            top           : typography.length > 1 ? '-.1rem'  : '0',
            textShadow    : typography.length > 1 ? 'none'     : '0.13rem 0.1rem #ffffff66' ,
            color         : typography.length > 1 ? '#ffffff99': '' ,
            fontFamily    : 'Frank Ruhl Libre',
            fontWeight    : '300',
            position      : 'relative',
            letterSpacing : 2,
        }}
    >
        {/* Render the string inside the Typography component */}
        { typography }
    </Typography>
);





  // Based on the value of matches, we set the text variable.
  // If matches is true (i.e., the screen width is 'sm' or larger), 
  // the text is set to 'Harry James Greenblatt'. Otherwise, it's set to 'hJg'.
  const text = matches 
  ? (
      <Fade in={matches} timeout={500}>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '2.5rem'
              }}
          >
              {
                typographyElements.map( tEl => 
                    tEl.length > 1 
                    ? tEl
                    : <Grow key={nanoid()} in={matches} timeout={500}>{tEl}</Grow>
                )
              }
          </Box>
      </Fade>
  )
  : (
      <Fade in={!matches} timeout={500}>
          <Box
              sx={{
                  fontFamily: 'Frank Ruhl Libre',
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  textShadow: '0.13rem 0.1rem #ffffff66',
                  userSelect: 'none'
              }}
          >
              hJg
          </Box>
      </Fade>
  );

  return (

    // The Link component is used to navigate between different parts of the application.
    // Here, it's being used to navigate to the root ("/") of the application.
    // The style prop is used to apply inline styles to the Link component.
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
            sx={{
                fontFamily: 'Frank Ruhl Libre',
                fontSize: '2.5rem',
                fontWeight: '300',
                textShadow: '0.13rem 0.1rem #ffffff66',
                userSelect: 'none'
            }}
        >
            {text} 
        </Box>
    </Link>
  );
}

export default useResponsiveText;
