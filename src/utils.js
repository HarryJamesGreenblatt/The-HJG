// Importing the LoremIpsum class from the lorem-ipsum package
import { LoremIpsum } from "lorem-ipsum";



// Defining an array of section names
export const sections = [
    "Home",
    "About",
    "Skills",
    "Contact"
]



// Defining an array of colors for under fold sections
export const colors = [
    '#286510', 
    '#0000a5', 
    '#db7214', 
    'red'
];



// Function to generate a specified number of lorem ipsum words
export const lorem = (number) => {
    const lorem = new LoremIpsum();
    return lorem.generateWords(number);
}; 



// Function to generate a specified number of lorem ipsum sentences
export const lorems = (number) => {
    const lorem = new LoremIpsum();
    return lorem.generateSentences(number);
};  



// Function to create an array of integers from start to end, inclusive
export const range = (start, end ) => Array.from(
    {
        length: end - start + 1
    },
    (v, k) => k + start
);


// Function to generate a specified number of dummy article objects
export const generateDummyArticles = ( number ) => {
    
    const articles = [];
    
    for (let i = number; i > 0; i--){
        articles.push({
            title: 'title' + i,
            publishedAt: new Date(),
            source: { name: 'source' },
            urlToImage: 'https://th.bing.com/th/id/OIP.HySrCJe7ATbkNjvwko8rwQHaIZ?rs=1&pid=ImgDetMain',
            description: lorem(number)
        })
    }
    
    return articles
}


