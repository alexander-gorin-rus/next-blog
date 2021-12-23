import Link from 'next/link';
import React from 'react';
import style from './Blog.module.css';

const BlogComponent = () => {
    return (
        <div className='wrapper'>
            <div className={style.postWrapper}>
                <Link href='/post'>
                    <a className={style.post}>
                        <div className={style.postTitle}>Post Title</div>
                    </a>    
                </Link>
                
            </div>
        </div>
    )
}

export default BlogComponent
