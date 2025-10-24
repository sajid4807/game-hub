import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="min-h-[650px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
        </div>
        <div className="card lg:card-side lg:w-4/12 bg-gradient-to-r from-[#c2e9fb] via-[#fefefe] to-[#fceabb] p-5 rounded-lg gap-5">
          <figure className="lg:w-4/12">
            <img
              src={user?.photoURL}
              className="w-36 h-36 rounded-full"
              alt="Photo"
            />
          </figure>
          <div className="lg:w-4/12">
            <p className="">Full Name :</p>
            <h2 className="font-bold uppercase">{user?.displayName}</h2>
            <p>Email :</p>
            <p className="font-medium mb-2">{user?.email}</p>
            <div className="">
              <Link
                to="/updateProfile"
                className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
