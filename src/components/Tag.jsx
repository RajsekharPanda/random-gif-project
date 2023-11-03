import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;
console.log(API_KEY)

const Tag= () => {
    const [tag, setTag] = useState('');
    const {gif, loading, fetchData} = useGif(tag);


    return(
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }

            
            <input
            className="w-10/12 text-lg py-1 rounded-lg text-center"
            type="text"
            onChange={(event) => setTag(event.target.value)}
            value={tag}
            />


            <button 
            onClick={()=>fetchData(tag)}
            className="bg-[#fdf4ff] mb-[20px] w-10/12 text-lg py-1 rounded-lg "
            >Generate</button>
        </div>
    )
}

export default Tag