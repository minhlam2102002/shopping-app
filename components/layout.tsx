import React from 'react'
import ResponsiveAppBar from './navbar'
// import Footer from './footer'

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <ResponsiveAppBar />
        <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}