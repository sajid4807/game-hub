import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

// PopularGame Component
const PopularGame = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/gameData.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating descending and take top 3
        const topGames = data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 3);
        setGames(topGames);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Popular Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
          >
            {/* Game cover */}
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{game.title}</h3>
              <p className="text-sm mb-2">{game.category}</p>
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{game.ratings}</span>
              </div>
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-center px-3 py-1 rounded-full text-sm"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGame;
