import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

const MainLayout = () => {
    const navigation = useNavigation();
     const isLoading = navigation.state === 'loading';
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <div className="flex-1">
                {isLoading ? <div className="absolute inset-0 flex justify-center items-center bg-black/30 z-50"> 
                 <Loading />
                 </div> : <Outlet />}
                {/* <Outlet></Outlet> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;