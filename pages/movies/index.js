import * as React from "react"
import sanity from "../../lib/sanity"

import imageUrlBuilder from "@sanity/image-url"
const imageBuilder = imageUrlBuilder(sanity)
const imageUrlFor = source => imageBuilder.image(source)

const Movies = ({ movies }) => {
  return <>
    <style jsx>{`
        p {
          color: blue;
        }
        .movies-container {
          display:flex
        }
        h3 { 
            font-size: 14px
        }
        .movies-container > div {
            background-color: #f1f1f1;
            width: 500px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-size: 30px;
          }
        }
      `}</style>
    <div className="movies-container">
      {movies.map((movie, key) => {
        return (<div key={key}>
          {movie.poster && (
            <img
              src={imageUrlFor(movie.poster)
                .ignoreImageParams()
                .width(300)}
              width="100"
              height={100 / movie.posterAspect}
            />)}
          <h3>{movie.title}</h3>

        </div>)
      })}
    </div>
  </>
}

const query = `*[_type == "movie"] {
    _id,
    title,
    releaseDate,
    poster,
    "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
    "director": crewMembers[job == "Director"][0].person->name
  }[0...50]
  `;

export const getStaticProps = async () => {
  const movies = await sanity.fetch(query);
  return {
    props: { movies } // will be passed to the page component as props
  };
}

export default Movies