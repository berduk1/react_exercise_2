const BlogList = ({blogs, title, handleDelete}) =>{
   
    return(
        <div className="blog-list">
            {blogs.map((blog) =>(
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <h2>{title}</h2>
                    <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default BlogList 