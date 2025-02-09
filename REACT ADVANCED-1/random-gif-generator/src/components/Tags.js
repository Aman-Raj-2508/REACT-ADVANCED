import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tags = () => {

    const [tag, setTag] = useState('car');


    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     // const output = await axios.get(url); //returns a promise object
    //     // console.log(output);

    //     // We destruct the data from the api
    //     const { data } = await axios.get(url);

    //     const imageSource = data.data.images.downsized_large.url;

    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { gif, loading, fetchData } = useGif(tag);

    return (
        <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450" />)
            }

            <input
                className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                type="text"
                onChange={(event) => setTag(event.target.value)}
                value={tag}

            />


            <button onClick={() => fetchData()} className="w-10/12 bg-blue-200 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium     tracking-wide" >
                Generate
            </button>
        </div>
    )
}
export default Tags;
