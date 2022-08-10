import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head';
import * as React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // window.__lc = window.__lc || {};
    // window.__lc.license = 14398326;
    // ; (function (n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) } var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n) } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e }(window, document, [].slice))
  }, [])
  return (
    <>
      <CssBaseline enableColorScheme />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
