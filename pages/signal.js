import Head from 'next/head';
import styles from '../styles/Signal.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Toolbar } from '../components/toolbar';

const TvPage = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/popular-movies'); // Adjust the endpoint as needed
        const popularMovies = await response.json();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Toolbar />
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p className="text-gray-600">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvPage;
