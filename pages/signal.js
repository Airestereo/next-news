import Head from 'next/head';
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
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Toolbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-600">{movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Signal />
    </div>
  );
};

const Signal = () => {
  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-2xl text-gray-800">Title</h1>
      <ul className="list-none p-0">
        <li className="my-2 p-2 bg-white border border-gray-300">Movie Item 1</li>
        <li className="my-2 p-2 bg-white border border-gray-300">Movie Item 2</li>
        <li className="my-2 p-2 bg-white border border-gray-300">Movie Item 3</li>
      </ul>
    </div>
  );
};

export default TvPage;
