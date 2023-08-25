import React, {Component, useEffect} from 'react'
import {useState} from 'react'
import BlogList from './BlogList';
const Home = () => {
    const[blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id!==id);
            setBlogs(newBlogs);
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogss')
                .then(res=>{
                    if(!res.ok){
                        throw Error('could not fetch data')
                    }
                    return res.json()
                })
                .then(data=>{
                    setBlogs(data);
                    setIsPending(false)
                })
                .catch(err=>{
                    setError(err.message)
                })
        }, 1000);
    }, []);

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />}
        </div>
    )
    }
    

export default Home