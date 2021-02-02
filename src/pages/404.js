import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export default function NotFound () {
    return (
        <Layout>
            <Head title="Page not found"/>
            <h1>Oops! The page you navigated to could not found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}