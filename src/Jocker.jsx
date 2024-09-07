import { useEffect, useState } from "react";

export default function Jocker(){
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async() => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        console.log(jsonResponse);
    };

    useEffect(() => {async function getNewJoke() {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        console.log(jsonResponse);
    }
    getNewJoke();
    }, []);



    return(
        <div>
            <h3>Jocker!</h3>
            <button onClick={getNewJoke}> new joke</button>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
        </div>
    )
}