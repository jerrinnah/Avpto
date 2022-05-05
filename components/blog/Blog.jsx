import React from 'react'
import BlogCard from '../cards/blogCard/BlogCard'

import {blogPost} from '../../data/data'

function Blog({}) {
  return (
    <div>
      
        
      <section className="blog container">
        <div className="blog__header-holder">
          <h5 className="blog__header">From Our Blog</h5>
        </div>
        <div className="blog__card-holder">
         
        { blogPost.map((blog)=>(
        <BlogCard
        key={blog.id}
        src={blog.image.src}
        title={blog.title}
        more={blog.more}/>
        
      ))}
         
        </div>
      </section>
    </div>
  )
}

export default Blog