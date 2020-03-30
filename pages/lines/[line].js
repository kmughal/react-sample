import * as React from "react"
import { useRouter } from 'next/router'

const Line = ({url}) => {
    const router = useRouter()
    console.log("router>>" , router)
    return <>
        <h1>The name provided by you {router.query.line}</h1>
    </>
}

export const getStaticProps = props => {
    console.log(props)
    return { props : {line : {}}}
}

export const getStaticPaths = (context) => {
    console.log("context:", context)
    const paths = ["central" , "cicle" , "tfl-rail"].map(line => ({params : {line}}))
    console.log("generating routes")
    return {paths , fallback : false}
  }

  

export default Line