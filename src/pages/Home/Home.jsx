import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import PopularGame from "../../components/PopularGame/PopularGame";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home | GameZone</title>
      </Helmet>
      <Banner />
      <PopularGame />
      <Newsletter />
    </div>
  );
};

export default Home;
