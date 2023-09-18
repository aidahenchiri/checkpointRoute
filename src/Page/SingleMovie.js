import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import moviesData from '../Data'
import './Single.css';

const SingleMovie = ({movies}) => {
  const navigate =useNavigate()

    let {id} = useParams()
    const [film , setFilm]=useState({})

    useEffect(()=>{          /* pour relecher le page et mise à jour de base*/
    const movieDetails = movies.find((el) => el.id==id)        /* kol element id mta3o id bech y5arjo pour chercher le film  prend le permier elment qui on a chercher */
     setFilm( movieDetails)
},[id]) /* [id])  useeffect ne change que lorsque on change id    */
  return (
    <div>

        <p></p>

<canvas class="orb-canvas"></canvas>
<div class="overlay">
  <div class="overlay__inner">
    <h1 class="overlay__title">
    {film.title}
    </h1>
    <p class="overlay__description">
    {film.description}
    </p>
    <div class="overlay__btns">


        <iframe src={film.trailer}></iframe>
        
<br></br>
      <button class="overlay__btn overlay__btn--colors"onClick={()=>navigate(-1)}>
         Go bak

      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default SingleMovie