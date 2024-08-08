  // pages/api/popular-movies.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
      const data = await response.json();
      res.status(200).json(data.results);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  