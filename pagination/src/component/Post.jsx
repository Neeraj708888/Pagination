import React from 'react'
import './Post.css'

const Post = ({ posts, loading }) => {
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <>
        <h3>Pagination Functionality: here we are showing large dataset into multiple pages</h3>
            {posts.map((data, index) => (
                <div className='list' key={index}>
                    <p >{data.title}</p>
                </div>
            ))}
        </>
    )
}

export default Post;