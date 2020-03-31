import * as React from "react"
import Link from 'next/link'
import * as fetch from "node-fetch"
import { Router } from "next/router"
import NProgress from "nprogress"
import Head from "next/head"

Router.events.on("routeChangeStart", url => {
    NProgress.start()
    
})
Router.events.on("routeChangeComplete", () => {
    setTimeout(()=> {
        NProgress.done()
    },1000)
    console.log(NProgress)
    
})

const People = ({ people }) => {
    return <>
          <Head>
            <title>This is a test</title>
            <script src='nprogress.js'></script>
            <link rel='stylesheet' href='nprogress.css' />
          </Head>
        <style jsx>{`
        * {
            box-sizing: border-box;
        }

         a {
             display: block;
             text-decoration: none;
             padding: 10px 10px;
             background: #f5f5f5;
         }
        `}</style>
        {people.map((p, i) => {
            const u = `/people/${p.id}`;
            return <Link key={i} href="/people/[id]" as={u}>
                <a href={u}>{p.name}</a>
            </Link>
        })}
    </>
}

export default People

const getPeopleJson = async () => {
    // let fs = require("fs")
    // let path = require("path")
    // let peopleJsonFilePath = path.resolve(process.cwd(), "posts", "people.json")
    // let contents = fs.readFileSync(peopleJsonFilePath, "utf-8")

    // let parseJson = JSON.parse(contents)
    // return parseJson
    const response = await fetch("http://localhost:3000/api/getPeople")
    const peopleList = await response.json()
    return peopleList
}

export const getStaticProps = async () => {
    const people = await getPeopleJson()
    return {
        props: { people }
    }
}