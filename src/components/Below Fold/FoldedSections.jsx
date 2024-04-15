import { Box } from "@mui/system";
import { nanoid } from "nanoid";
import { colors } from '../../utils';
import FoldedContent from "./FoldedContent";
import extraDetailImg from '../../../public/extra detail.png';
import trackRecordImg from '../../../public/track record.png';
import InViewMotion from "./InViewMotion";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";





export default function FoldedSections({expanded}){
    
    // useTheme is a custom React hook that returns the theme object.
    // It can be used in a component's render function to read the current theme.
    const theme = useTheme();
    
    // useMediaQuery is a custom React hook that matches the current screen size 
    // against a Material-UI breakpoint (or any valid CSS media query string) and 
    // returns true if the screen size matches the breakpoint and false otherwise.
    // In this case, it checks if the screen width matches the 'sm' breakpoint or larger.
    const matches = useMediaQuery(theme.breakpoints.up('md'));


    // Define the animation states for framer-motion
    const variants = {
        extraDetail: {
            initial: { scale: 0.3 },
            animate: { 
                scale: [0.6, 0.65, 0.65, 0.6, 0.65, 0.6],
                rotate: matches 
                    ? [-15, -30, -15, 0, -15 ]
                    : [110, 90, 60, 90, 110 ],
                transition: { repeat: Infinity, duration: 9 } 
            }
        },
        trackRecord: {
            initial: { scale: 0.3 },
            animate: { 
                scale: [0.6, 0.65, 0.65, 0.6, 0.65, 0.6],
                rotate: matches 
                    ? [-15, -30, -15, 0, -15 ]
                    : [110, 90, 60, 90, 110 ],
                transition: { repeat: Infinity, duration: 9 } 
            }
        },
    };


    // Map over the colors array to create a Box component for each color
    return colors.map( (color, i) => { 

        let commaDelimitedHeading;
        let content;

        // Switch statement to set the heading and content based on the index
        switch(i) {
            case 0:
                commaDelimitedHeading = "an,extra detail,below the fold";
                content = (
                    <Box
                        sx={{
                            display : 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            width: '100%',
                            overflow: 'hidden',
                            padding: 0
                            // height: '100%'
                        }}
                    >
                        <InViewMotion
                            imgSrc={extraDetailImg}
                            variants={variants.extraDetail}
                            i={i}
                            matches={matches}
                            text={
                                `I leverage a diverse range of skills including ${'coding'.toUpperCase()}, ${'information management'.toUpperCase()}, and ${'design'.toUpperCase()} to ensure my clients are consistently provided with deliverables which meet their exact specifications.
                                `
                            }
                        />
                    </Box>
                );
                break;
            case 1:
                commaDelimitedHeading = "a,track record,of success";
                content = (
                    <Box
                        sx={{
                            display : 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            width: '100%',
                            overflow: 'hidden'
                            // height: '100%'
                        }}
                    >
                        <InViewMotion
                            imgSrc={trackRecordImg}
                            variants={variants.trackRecord}
                            i={i}
                            matches={matches}
                            text={
                                `I have many many cookies.`
                            }

                        />
                    </Box>
                );
                break;
            case 2:
                commaDelimitedHeading = "a,good reputation,with customers";
                break;
            default:
                commaDelimitedHeading = "a,game plan,worth following"
        }

        // Return a Box component with a unique key, styled based on the color and index
        // The Box contains a FoldedContent component with the heading and content
        return(
            <Box
                key={nanoid()} // Generate a unique key for each Box
                component='section'
                className={`below-fold-section${i}`}
                sx={{
                    display: expanded ? 'none' : 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: color,
                    padding: '1em 0',
                    width: '100%',
                    height: '80.5dvh',
                    scrollSnapAlign: 'start'
                }}
            >
                <FoldedContent 
                    commaDelimitedHeading={ commaDelimitedHeading } 
                >
                    { content }
                </FoldedContent>            
            </Box>
        );
    });
}
