import React from 'react'
import allBlogs from '../Components/allBlogs'
import Title from '../Components/Title'

function BlogsPage() {
    return (
        <div className="BlogsPage">
         <Title title={"About Me"} span={"About Me"}/>

            {
            allBlogs.map((blog) => {
                return <div className="blog" key={blog.id}>
                    <div className="blog-content">
                        <img src={blog.image} alt=''/>
                        <a href={blog.link} className="blog-link">
                            {blog.title}
                        </a>
                        <div className="date-icon">
                        </div>
                    </div>

                </div>
               
            })
            }
        </div>
    )
}

export default BlogsPage
