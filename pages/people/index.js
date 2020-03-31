import * as React from "react"
import Link from 'next/link'

const People = ({ people }) => {
    return <>
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

const getPeopleJson = () => {
    let fs = require("fs")
    let path = require("path")
    let peopleJsonFilePath = path.resolve(process.cwd(), "posts", "people.json")
    let contents = fs.readFileSync(peopleJsonFilePath, "utf-8")

    let parseJson = JSON.parse(contents)
    return parseJson
}

export const getStaticProps = () => {
    const people = getPeopleJson()
    return {
        props: { people }
    }
}