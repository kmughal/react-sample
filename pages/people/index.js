import * as React from "react"


const People = ({ people }) => {
    return <>
        {people.map((p,i) => {
            const u = `/people/${p.id}`;
            return <a key={i} href={u}>{p.name}</a>
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