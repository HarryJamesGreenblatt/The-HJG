import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TypingEffect({ text = '', speed = 100, delay = 0 }){

    const [content, setContent] = useState('');
  
    useEffect(() => {
      let index = 0;
      const timeoutId = setTimeout(() => {
        const intervalId = setInterval(() => {
          setContent((prev) => prev + text.charAt(index));
          index++;
          if (index > text.length - 1) {
            clearInterval(intervalId);
          }
        }, speed);
      }, delay);
      return () => {
        clearTimeout(timeoutId);
        setContent('');
      };
    }, [text, speed, delay]);
  
    return (
        <Paper
          elevation={4}
          sx={{
            padding: '2em',
            background: '#ffffff22',
            opacity: '.95',
            borderRadius: '100px', 
            width: 'unset'
          }}
        >
          <Typography 
            variant="body1"
            sx={{
              fontFamily: 'Annie Use Your Telescope',
              fontSize: {xs:'1.25rem', sm: '1.75rem', md: '2rem'},
              color: '#ffffffcc',
              textAlign: 'justify'
            }}
          >
            {content}
          </Typography>
        </Paper>
    );
}
  
  