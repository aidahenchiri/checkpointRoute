import React from 'react'
import { Button} from 'react-bootstrap'
import './MovieCard.css';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

export const MovieCard = ({movie}) => {


  return (
   <div>

       {/* <Card style={{ width: '10rem', marginTop:"30px" }} >

     <Card.Img variant='top' src={movie.posterUrl} style={{width: '20rem', height: '25rem'}}></Card.Img>
      
     <Card.Body>
    <Card.Title> {movie.title} </Card.Title>
    <Card.Text> {movie.description}  </Card.Text>
    <ReactStars
  count = { 5 } 
  value = { movie.rate } 
  size = { 24 } 
  edtit={false}
half={false}
  color2 = { ' #ffd700 ' }/> 

  <Link to={`/movie/${movie.id}`}>  <Button href={movie.trailer} variant="primary">watch trailer</Button> </Link>

  </Card.Body>
</Card>

 

 */}
<div className="row">
  
  <div className="col-3 col-m-4 col-s-6">
    <div className="card-movie" style={{ backgroundImage: `url(${movie.posterUrl})`}}>
      <div className="description-container">
        <p>{movie.title}</p>
          <p>{movie.description}</p>
          <p>  <ReactStars
  count = { 5 } 
  value = { movie.rate } 
  size = { 24 } 
  edtit={false}
half={false}
  color2 = { ' #ffd700 ' }/> </p>
          <p>  <Link to={`/movie/${movie.id}`}>  <Button href={movie.trailer} variant="primary">watch trailer</Button> </Link>
</p>
          
      </div>
    </div>
  </div>
  
 

</div>
</div>
  )
}

export default MovieCard