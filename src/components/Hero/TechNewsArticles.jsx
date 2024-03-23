import { Box } from "@mui/system";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { nanoid } from "nanoid";


export default function TechNewsArticles({jsonData}){

    // Filter out articles without an image, sort them by published date in descending order,
    // and map them to a list of Card components
    const techNewsArticles = jsonData
        .filter( article => 
            article.urlToImage // Filter out articles without an image
        )
        .sort( (articleA, articleB) => 
            new Date(articleB.publishedAt) - new Date(articleA.publishedAt) // Sort by published date
        )
        .map( article =>
            // For each article, create a Card component
            <Grid item key={nanoid()} xs={12} s={4} md={6}>
                <Card 
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        overflow: 'hidden',
                        borderRadius: 2, // rounded corners
                        boxShadow: 1, // shadow effect
                        background: '#160a00ee',
                        paddingTop: 0
                    }}
                >
                    <CardMedia 
                        component="img" 
                        height="140" 
                        image={article.urlToImage} 
                        alt={article.title}
                        sx={{
                            objectFit: 'cover', // to ensure the image covers the area
                        }}
                    />
                    <CardContent 
                        sx={{ 
                            flexGrow: 1,
                            paddingTop: 0 
                        }}
                    >
                        <Typography 
                            variant="caption" 
                            color="text.secondary" 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between' 
                            }}
                        >
                            <CardActions>
                                <Button 
                                    size="small" 
                                    href={article.url}
                                    sx={{
                                        position: 'relative',
                                        right: '1em',
                                        fontSize: '.75rem'
                                    }}
                                >
                                    {article.source.name}
                                </Button> 
                            </CardActions>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {new Date(article.publishedAt).toLocaleDateString()} 
                            </Box>
                        </Typography>
                        <Typography 
                            variant="h6" 
                            component="div"
                            sx={{
                                marginBottom: '1em'
                            }}
                        >
                            {article.title}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{
                                fontStyle: 'italic',
                            }}
                        >
                            {article.description} 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    );

    // Return the list of Card components
    return(
        techNewsArticles
    );
        
}
