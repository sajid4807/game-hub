import Banner from "../../components/Banner/Banner";
import PopularGame from "../../components/PopularGame/PopularGame";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner/>
            <PopularGame/>
        </div>
    );
};

export default Home;