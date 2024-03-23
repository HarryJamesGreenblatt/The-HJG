import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Footer() {
    return(
        <Box
            sx={{
                padding: '0' ,
                width: '100%',
                height: '100%'
            }}
        >
            <Divider variant="fullWidth" />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '99%',
                }}
            >
                <Typography>
                    2024 all rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}