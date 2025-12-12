import { useState } from "react";
import MovieCard from "./components/MovieCard";

{movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}


export default function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      description: "A mind-bending thriller by Christopher Nolan.",
      image:
        "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_SY445_.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 Movie Database</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-300">Genre: {movie.genre}</p>
            <p className="text-sm text-gray-300">Rating: ⭐ {movie.rating}</p>
            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>

            <div className="flex gap-2 mt-4">
              <button className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700">Edit</button>
              <button className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
