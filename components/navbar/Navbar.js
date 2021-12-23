import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <>
            <nav className={style.nav}>
                <div className={style.navbarItem}>
                    <Link  href='/'>
                        <a className={style.logo}>NEXT || BLOG</a>
                    </Link>
                </div>
                <div>
                    <Link href='/post'>
                        <a className={style.addPost}>Add post</a>
                    </Link>
                </div>
            </nav>
        </>
    )
}
