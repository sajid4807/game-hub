import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/30 hover:bg-white/60 p-2 md:p-3 rounded-full"
    onClick={onClick}
  >
    <IoIosArrowForward size={24} className="md:text-black text-white" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/30 hover:bg-white/60 p-2 md:p-3 rounded-full"
    onClick={onClick}
  >
    <IoIosArrowBack size={24} className="md:text-black text-white" />
  </div>
);

const Banner = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/gameData.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.slice(0, 5));
        setIsLoading(false);
      })

      .catch((err) => {
        toast.error("Error loading data:", err);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-[1250px] mx-auto my-10 lg:my-20">
      <Slider {...settings}>
        {games.map((game) => (
          <div
            key={game.id}
            className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${game?.coverPhoto})`,
                filter: "brightness(0.4)",
              }}
            ></div>

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {game.title}
              </h2>
              <p className="max-w-xl sm:max-w-2xl mb-4 text-sm sm:text-base md:text-lg">
                {game?.description.length > 140
                  ? `${game.description.slice(0, 140)}...`
                  : game.description}

                {/* {game.description} */}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white px-4 py-2 rounded-full text-sm sm:text-base"
                >
                  <FaGooglePlay /> Play Store
                </a>
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm sm:text-base"
                >
                  <FaAppStoreIos /> App Store
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
