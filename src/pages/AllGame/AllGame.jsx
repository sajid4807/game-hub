import { useLoaderData } from "react-router";
import Game from "../../components/Game/Game";

const AllGame = () => {

    const allGame = useLoaderData()
    // const isLoading = navigation.state === 'loading';
    // console.log(allGame)
    return (
        <div className="max-w-[1250px] mx-auto my-10">
            <div className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">All Games</h2>
            <p className="text-gray-900">This curated collection features and highly-rated video games across a wide variety of genres from fast-paced shooters and open-world adventures to cozy farming simulations and intense roguelikes.</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    
                    allGame.map(game => <Game key={game.id} game={game}></Game>)
                }
            </div>
        </div>
    );
};

export default AllGame;