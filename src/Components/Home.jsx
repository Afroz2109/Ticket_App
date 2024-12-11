import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=968ca3e64bfb589dfa090695ff0af111';
const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    const user= localStorage.getItem('userEmail');
    if(!user) {
      navigate('/login')
    }
  },[])

  useEffect(() => {
    axios
      .get(MOVIE_API)
      .then((response) => {
        setMovies(response.data.results); 
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleClick = (movieId) => {     
    const movie = movies.find(m => m.id === movieId); // Find the movie object by ID
    if (movie) {
      navigate('/movie/' + movieId, { state: movie });
    } else {
      console.error("Movie not found");
    }
  };
  

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '30px' }}>
      {movies.map((movie) => (
        <Card 
          onClick={() => handleClick(movie.id)} 
          key={movie.id} 
          style={{ width: '22rem', padding: '10px', margin: '5px', height: 550, overflow: 'hidden' }}
        >
          <Card.Body>
            <Card.Img src={IMAGE_API + movie.poster_path} style={{ marginBottom: '4px',height:'auto' }} />
            <Card.Title>{movie.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
