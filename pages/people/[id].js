import * as React from "react"
import { useRouter } from "next/router"

const PersonDetail = ({ people }) => {
    if (!people) {
        return <h1>No record found!</h1>
    }
    const query = useRouter().query
    return <>
        <p>{people.name} lives {people.address}</p>
    </>
}

const getPeopleJson = () => {
    let fs = require("fs")
    let path = require("path")
    let peopleJsonFilePath = path.resolve(process.cwd(), "posts", "people.json")
    let contents = fs.readFileSync(peopleJsonFilePath, "utf-8")

    let parseJson = JSON.parse(contents)
    return parseJson
}


export const getStaticProps = ({ params }) => {
    const peopleList = getPeopleJson()
    const people = peopleList.filter(p => p.id.toString() === params.id)[0]
    return {
        props: { people }
    }
}

export const getStaticPaths = (props) => {
    const people = getPeopleJson()
    const paths = people.map(p => {
        const id = p.id.toString()
        return { params: { id } }
    })

    return { paths, fallback: false }
}


export default PersonDetail
