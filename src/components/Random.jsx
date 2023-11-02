import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;
console.log(API_KEY)

const Random = () => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    
    async function fetchData () {
        setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        console.log(data);
        setGif(imageSource);
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    },[])

    function clickHandler () {
        fetchData();
    }   

    return(
        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }

            
            <button 
            onClick={clickHandler}
            className="bg-[#fdf4ff] mb-[20px] w-10/12 text-lg py-1 rounded-lg "
            >Generate</button>
        </div>
    )
}

export default Random