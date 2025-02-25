import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
// import './Blogs.css'

const Blogs = () => {
    // Consuming
    const { posts, loading } = useContext(AppContext);

    return (
        <div className='w-[11/12] max-w-[670px] py-3 flex flex-col gap-y-7 mt-[68px] mb-[70px]'>
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) : (posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold text-large '>{post.title}</p>
                            <p className='text-sm mt-[4px]'>
                                By <span className='itlaic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                            </p>
                            <p className='text-sm mt-[4px] '>Posted on {post.date}</p>
                            <p className='text-md mt-[14px] '>{post.content}</p>
                            <div className='flex gap-x-3'>
                                {post.tags.map((tag, index) => {
                                    return <span key={index} className='text-blue-500 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>

                    )))
                )
            }
        </div>
    )
}

export default Blogs; 