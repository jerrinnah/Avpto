import React from 'react'

function BlogCard({src, author, title, more}) {
  return (
    <div className="blog__card">
      <img
        className="blog__image"
        src={src}
        alt="blog image"
      />
      <div className="blog__text-holder">
        <p className="blog__author">
          {' '}
          By <span>{author}</span>-05.09.2021
        </p>
        <p className="blog__quote">{title}</p>
        <a className="blog__link" href="#">
         {more} <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  )
}

export default BlogCard
