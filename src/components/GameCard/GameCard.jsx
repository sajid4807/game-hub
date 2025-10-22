import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const GameCard = ({game}) => {
  return (
    <div className="max-w-[1250px] rounded-sm my-10 lg:my-20 mx-auto bg-gradient-to-r from-[#fceabb] via-[#fefefe] to-[#c2e9fb]">
      <div className="card card-side flex items-center justify-center gap-6 p-5">
        <figure>
          <img
            src={game?.coverPhoto}
            className="lg:h-[500px] lg:w-[1250px]"
            alt="game"
          />
        </figure>
        <div className="items-center justify-center">
            {/* description 200 word kora lagba */}
          <h2 className="text-5xl font-bold">{game?.title}</h2>
          <p className="text-lg font-medium my-3">{game?.description}</p>
          <p className="text-xl font-semibold mb-5">Category : {game?.category}</p>
          <div className="mb-7">
            <Link to={game.downloadLink} target="_blank" className="px-6 py-2 rounded-sm font-semibold bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Install Now</Link>
          </div>
            <Link to='/game' className="px-6 py-2 rounded-sm font-semibold bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">  All news in this category</Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
