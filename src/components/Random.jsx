import axios from "axios";
import React, { useState } from "react";

const API_KEY = import.meta.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const [gif, setGif] = useState('')
    
    async function fetchData () {
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const output = await axios.get(url);
        console.log(output);
    }

    function clickHandler () {

    }

    return(
        <div className="w-1/2 h-[500px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
            <img src={gif} width="450" />
            <button 
            onClick={clickHandler}
            className="bg-[#fdf4ff] w-10/12 text-lg py-1 rounded-lg "
            >Generate</button>
        </div>
    )
}

export default Random