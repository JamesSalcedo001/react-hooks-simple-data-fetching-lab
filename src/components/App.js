// create your App component here
import { useState, useEffect } from "react";
// import { data } from "../mocks/data";
// import { handlers } from "../mocks/handlers";
// import { server } from "../mocks/server";
// import { worker } from "../mocks/worker";


function App() {
    const [randomDog, setIsRandomDog] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setIsRandomDog(data.message);
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) return <p>Loading...</p>
    return (
        <img src={randomDog} alt="A Random Dog"></img>
    )
}

export default App;



/*  Create an App component from scratch

Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.

Display a <p> tag with the text of "Loading..." when the component is first rendered

After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".  */