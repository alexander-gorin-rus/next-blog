import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Navbar } from '../components/navbar/Navbar'

const Contacts = () => {
    return (
        <>
            <Navbar />
            <Head>
                <title>
                    Contacts
                </title>
            </Head>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h1>Contacts Page</h1>     
        </>
    )
}

export default Contacts
