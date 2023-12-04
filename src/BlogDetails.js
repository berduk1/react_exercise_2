import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () =>{
    const { id } = useParams();

    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const navigate = useNavigate();

    const handleClick=()=> {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }
    
    return(
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleClick}>Delete</button>
            </article>
            )}
        </div>
    )
}
export default BlogDetails;