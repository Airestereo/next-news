// pages/api/popular-movies.js

export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Fetch popular movies data from an external API or database
      const popularMovies = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' },
      ];
  
      res.status(200).json(popularMovies);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  




//   // pages/api/popular-movies.js
// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//       const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
//       const data = await response.json();
//       res.status(200).json(data.results);
//     } else {
//       res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   }
  