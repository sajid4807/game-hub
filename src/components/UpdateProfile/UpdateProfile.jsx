import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const {user,profile,setUser}=use(AuthContext)
    
    // const location = useLocation()
    const navigate = useNavigate()
        // const [isLoading, setIsLoading] = useState(false); 


    const handleUpdate = e =>{
        e.preventDefault()
        // console.log('clicked ')
        const form = e.target
        const displayName = form.name.value
        const photoURL = form.photo.value
        // profile()
                // setIsLoading(true); 

        profile({displayName,photoURL})
            .then((res) => {
                toast.success('Successfully Update Profile 🎉')
                const user = res.user
                setUser(...user,displayName,photoURL)
                                // setIsLoading(false); 
            // navigate('/profile') 


                // navigate(`${location.state ? location.state : '/'}`)
                // navigate(`${location.state? location.state :'/profile'}`)
                // navigate(`${location.state ? location.state :'/profile'}`)
                
            })
            .catch(error =>{
                // console.log(error.message)
                // setUser(user)
                toast.error(error.code)
                                // setIsLoading(false); 

            })
                            // setIsLoading(false); 

            // navigate('/profile') check this code later
            navigate('/profile')
        // console.log({displayName,photoURL})
    }
    return (
        <div>
            <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>
                <div className="card lg:card-side lg:w-4/12 bg-gradient-to-r from-[#c2e9fb] via-[#fefefe] to-[#fceabb] p-5 rounded-lg gap-5">
  <figure className="lg:w-4/12">
    <img
      src={user?.photoURL}
      className="w-36 h-36 rounded-full"
      alt="Photo" />
  </figure>
  <div className="lg:w-6/12">
     <form onSubmit={handleUpdate}>
        {/* name */}
                <div className="mb-2.5">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full bg-white/20 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
               {/* Photo URL */}
                <div>
                <label className="block text-sm font-medium mb-1">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full bg-white/20 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                
              </div>
      <button type="submit" className="btn mt-4 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Update</button>
     </form>
    {/* <div className="">
    </div> */}
  </div>
</div>
            </div>
        </div>
    );
};

export default UpdateProfile;