import { useEffect, useState } from "react";

export default function useJsonData(){

    // Initializing jsonData state to null
    const [jsonData, setJsonData] = useState(null);
    

    // Using useEffect hook to fetch data when the component mounts
    useEffect(() => {
            // Options for the fetch request
            const options = {
            method: 'GET',
            headers: {
                'x-api-key': import.meta.env.VITE_NEWS_API_KEY
            }
            };


            // Defining a function which converts date objects to yyyy-mm-dd format 
            const formatDate = ( date ) => {
            return date.toLocaleDateString()
                .replace( /\//g, '-' )
                .replace(/(\d+)-(\d+)-(\d+)/g, '$3-$1-$2')
            }

            
            // Defining the fetchData function
            const fetchData = async () => {
            try {

                // Getting today's date
                let today = new Date();

                // Getting yesterday's date
                let yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                


                // Formatting today's date
                today = formatDate(today);

                // Formatting yesterday's date
                yesterday = formatDate(yesterday);



                // Logging yesterday's and today's dates
                console.log(yesterday, today)


                
                // Fetching data from the API
                const response = await fetch(
                `${import.meta.env.VITE_NEWS_API_BASE_URL}q=tech&from=${yesterday}&to=${today}`, 
                options
                );

                // Throwing an error if the response is not ok
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }

                // Parsing the response data as JSON
                const data = await response.json();

                // Setting the jsonData state to the fetched data
                setJsonData(data.articles);

            } 
            
            // Catching any errors and logging them
            catch (error) {
                console.error('Error:', error);
            }

            };

            // Calling the fetchData function
            fetchData();
        
        }, 
        
        // an empty dependency array will ensure only a single render 
        []
    
    );


    // the function will return the Json Data as state
    return jsonData

}
