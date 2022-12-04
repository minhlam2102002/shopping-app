import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

type Props = {
  children: React.ReactNode,
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <ScrollToTop/>
      <Footer />
    </>
  )
}