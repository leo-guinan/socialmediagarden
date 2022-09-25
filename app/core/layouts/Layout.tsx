import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import Header from "../components/Header"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "socialmediagarden"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full">


        <Header />
        <main className="py-10">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
