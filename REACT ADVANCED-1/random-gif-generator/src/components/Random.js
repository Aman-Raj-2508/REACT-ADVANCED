import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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


    const { gif, loading, fetchData } = useGif();

    return (
        <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450" />)
            }



            <button onClick={() => fetchData()} className="w-10/12 bg-green-200 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium     tracking-wide" >
                Generate
            </button>
        </div>
    )
}
export default Random;
