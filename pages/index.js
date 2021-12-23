import Head from 'next/head'
import Image from 'next/image'
import BlogComponent from '../components/blog/Blog.component'
import { Navbar } from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='container'>
          <BlogComponent />
      </div>
      
    </>
  )
}
