import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

type LayoutProps = {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <ScrollToTop/>
      <Footer />
    </>
  )
}