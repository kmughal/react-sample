import * as React from "react"
import { useRouter } from "next/router"
import * as fetch from "node-fetch"
const PersonDetail = ({ people }) => {
    if (!people) {
        return <h1>No record found!</h1>
    }
    const query = useRouter().query
    return <>
        <p>{people.name} lives {people.address}</p>
    </>
}

// const getPeopleJson = () => {
//     let fs = require("fs")
//     let path = require("path")
//     let peopleJsonFilePath = path.resolve(process.cwd(), "posts", "people.json")
//     let contents = fs.readFileSync(peopleJsonFilePath, "utf-8")

//     let parseJson = JSON.parse(contents)
//     return parseJson
// }


// const getServerSideProps = async ({ params }) => {
//     // let fs = require("fs")
//     // let path = require("path")
//     const response = await fetch("http://localhost:3000/api/getPeople")
//     const peopleList = await response.json()
//     // let peopleJsonFilePath = path.resolve(process.cwd(), "posts", "people.json")
//     // let contents = fs.readFileSync(peopleJsonFilePath, "utf-8")

//     //let peopleList = JSON.parse(contents)


//     const people = peopleList.filter(p => p.id.toString() === params.id)[0]
//     return {
//         props: { people }
//     }
// }

export const getStaticPaths = async (props) => {
    const response = await fetch("http://localhost:3000/api/getPeople")
    const people = await response.json()

    const paths = people.map(p => {
        const id = p.id.toString()
        return { params: { id } }
    })

    return { paths, fallback: false }
}


export const getStaticProps = async ({ params }) => {
    const response = await fetch("http://localhost:3000/api/getPeople")
    let people = await response.json()
    people = people.filter(p => p.id.toString() === params.id)[0]
    return {
        props: { people }
    }
}

export default PersonDetail
