import { useAnimation, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import { Box } from "@mui/system";
import TypingEffect from "./TypingEffect";


export default function InViewMotion({ imgSrc, variants, i, matches, text }) {
    
    const [fadeIn, setfadeIn] = useState(true); 

    const controls = useAnimation();
    
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
        setfadeIn( prevFadeIn => !prevFadeIn );
    }, [controls, inView]);

    
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '40%',
                    justifyContent: {xs: 'center', md: 'flex-start'},
                    alignItems: 'center',
                    margin: {xs: '0 auto', md: '0'},
                    zIndex: 1000
                }}
            >
                <Fade
                    in={fadeIn}
                    timeout={2000}
                >
                    <motion.img 
                        ref={ref}
                        src={imgSrc}
                        style={{
                            maxWidth: '100%',
                            margin: matches ? '8em': '0',
                        }}
                        variants={variants} // Apply the animation variants
                        initial="initial" // Set the initial state
                        animate={controls} // Set the animate state
                        exit="exit" // Set the exit state
                    />
                </Fade>
            </Box>
            <Fade 
                in={fadeIn} 
                timeout={8000}
            >
                <motion.div
                    style={{
                        display: 'flex',
                        width: matches ? '50%' : '90%',
                        margin: matches ?  '0': '0 auto', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2em 3em',
                    }}
                    ref={ref}
                    variants={{
                        animate: { 
                            translateX: ['-2em', '-1em', '0', '-1em', '-2em' ],
                            translateY: ['2em', '1em', '0', '1em', '2em' ],
                            transition: { repeat: Infinity, duration: 9 } 
                    }}} // Apply the animation 
                    initial="initial" // Set the initial state
                    animate={controls} // Set the animate state
                    exit="exit" // Set the exit state
                >
                    {
                        fadeIn 
                        ?
                        <TypingEffect 
                            text={
                                "  "
                                +
                                text
                            } 
                            speed={15} 
                            delay={2000}
                        />
                        :
                        null
                    }
                </motion.div>
            </Fade>   
        </>
    );
}