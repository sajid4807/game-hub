import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const Game = ({ game }) => {
  const { id,coverPhoto, title, description } = game;

    const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

   if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center my-20">
        <Loading /> 
      </div>
    );
  }

  return (
    <Link to={`/gameDetails/${id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={coverPhoto} className="h-[245px]" alt="Game" />
        </figure>
        <div className=" p-5">
          <h2 className="font-bold text-2xl text-[#3A3A3A] ">{title}</h2>
          {/* <p className="text-sm my-2">{description}</p> */}


           <p className="text-sm my-2">
          {description.length > 140 ? `${description.slice(0, 140)}...` : description}
          
        </p>


          <div className="">
            <button className="btn w-full bg-gradient-to-r from-yellow-500 via-red-400 to-pink-400 text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;
