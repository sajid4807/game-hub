import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { motion } from "framer-motion";

const PopularGame = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/gameData.json")
      .then((res) => res.json())
      .then((data) => {
        const topRating = data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 3);
        setGames(topRating);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Error loading data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center my-20">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-[1250px] mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-5 lg:mb-10 text-center">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link key={game.id} to={`/gameDetails/${game.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 2.05 }}
              whileTap={{ scale: 0.95 }}
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
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularGame;
