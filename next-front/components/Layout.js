import Navbar from "./Navbar"
import Footer from "./Footer"
import env from './../env'
import NextApp, { AppProps } from 'next/app';
import {Fragment} from 'react'

const Layout = ({ children, pageProps, categories })=>{
    return <Fragment {...pageProps}>
        <Navbar {...pageProps} categories={categories} />
        {children}
        <Footer {...pageProps}/>
    </Fragment>
}

export default Layout;