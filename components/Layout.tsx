import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <CssBaseline />
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  )
}