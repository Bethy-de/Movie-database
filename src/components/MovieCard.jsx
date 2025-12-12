export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="text-sm text-gray-300">Genre: {movie.genre}</p>
      <p className="text-sm text-gray-300">Rating: ⭐ {movie.rating}</p>
      <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
    </div>
  );
}

