// const Banner = () => {
//     return (
//         <div className="my-5">
//             <h3>banner</h3>
//         </div>
//     );
// };

// export default Banner;

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// slick-carousel CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
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

  // Load JSON from public folder
  useEffect(() => {
    fetch("/gameData.json")
      .then((res) => res.json())
      .then((data) => setGames(data.slice(0, 5)))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  // Slick settings with responsive breakpoints
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
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // hide arrows on small screens
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-6">
      <Slider {...settings}>
        {games.map((game) => (
          <div key={game.id} className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{game.title}</h2>
              <p className="max-w-xl sm:max-w-2xl mb-4 text-sm sm:text-base md:text-lg">
                {game.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm sm:text-base"
                >
                  <FaGooglePlay /> Play Store
                </a>
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm sm:text-base"
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
