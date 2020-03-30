import * as React from "react"
import Link from 'next/link'
import * as fetch from "node-fetch"


// export default function(props)
//  {

// }

// export function 

const Lines = props => {
  console.log(props)
  const lines = props.lines || []
 
  return (<>
  {lines.map((v,i)=> {
      return (<div key={i}>
          <Link key={i} href={`/lines/${v}`}>
            <a>{v}</a>
          </Link>
      </div>)
  })}
  </>)
}

export const getStaticProps =  (props)  => {
    console.log(props , "getStaticProps")
    return {
      props : {
      lines : ["central" , "cicle" , "tfl-rail"]
      }
  }
}

// export const getStaticPaths = (context) => {
//   console.log("context:", context)
//   const paths = ["central" , "cicle" , "tfl-rail"].map(line => ({params : {line}}))
//   console.log("generating routes")
//   return {paths , fallback : false}
// }

export default Lines