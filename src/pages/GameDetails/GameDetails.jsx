import { useLoaderData, useNavigation, useParams } from "react-router";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard/GameCard";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import ErrorId from "../ErrorId/ErrorId";

const GameDetails = () => {

    const {id} =useParams()
    const data = useLoaderData()
    const [game, setGame] =useState({})
        const navigation = useNavigation(); // loading check

    // console.log(id,data)

    useEffect( () => {
        const newData = data.find(singleData => singleData.id == id);
        setGame(newData)
    },[id,data])


    if (navigation.state === 'loading') {
        return <Loading />;
    }
    if(!game) return <ErrorId/>

    return (
        <div>
            <header>
            <Header></Header>
            </header>
                <GameCard game= {game}></GameCard>
                <footer>
                    <Footer></Footer>
                </footer>
        </div>
    );
};

export default GameDetails;