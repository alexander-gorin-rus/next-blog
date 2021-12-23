import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import PostComponent from '../components/post/Post.component'

const post = () => {
    return (
        <>
          <Navbar />
            <div className='container'>
                <PostComponent />  
            </div>  
        </>
    )
}

export default post
