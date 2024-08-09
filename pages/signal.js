import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toolbar } from '../components/toolbar';
import styles from '../styles/Signal.module.css';

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
    <div className={`${styles['min-h-screen']} ${styles['bg-gray-100']} ${styles.localClass}`}>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Toolbar />
      <div className="container mx-auto py-8">
        <h1 className={`${styles['text-4xl']} ${styles['text-gray-800']} ${styles['mb-5']} ${styles['text-center']} ${styles.localClass}`}>
          Popular Movies
        </h1>
        <ul className={`${styles['list-none']} ${styles['p-0']} ${styles.localClass}`}>
          {movies.map(movie => (
            <li key={movie.id} className={`${styles['mb-4']} ${styles['p-4']} ${styles['bg-white']} ${styles['border']} ${styles['border-gray-300']} ${styles.localClass}`}>
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-gray-600">{movie.release_date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="min-h-screen min-w-screen">
        <iframe
          src="https://solid-movies.app"
          style={{ width: '100%', height: '100%', border: 'none', minHeight: '100vh', minWidth: '100vw' }}
          allowFullScreen
          title="Video"
        ></iframe>
      </div>
    </div>
  );
};

export default TvPage;
