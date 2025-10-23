import { use, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const ForgetPassword = () => {
    const {forget} =use(AuthContext)
    const location = useLocation()
    // const navigate = useNavigate()

     const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);

    const handleUpdate =(e)=>{
        e.preventDefault()

        if (!email) {
      toast.error("Please enter your email!");
      return;
    }

        // const email = e.target.email.value
        forget(email)
        .then(res =>{
            toast.success('Check Your Email To Reset Password 🎉')
            // window.location.href = "https://mail.google.com";
            window.open("https://mail.google.com", "_blank");

            // navigate(`${location.state ? location.state : '/login'}`)

        })
        .catch(error =>{
            // toast.error("Something went wrong!");
            toast.error(error.message);
        })
        // console.log('clicked')

    }
    return (
        <div className="">
            <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>
                <div className="card lg:card-side bg-gradient-to-r from-[#c2e9fb] via-[#fefefe] to-[#fceabb] p-5 rounded-lg ">
  
  <div className="">
     <form onSubmit={handleUpdate}>
        {/* name */}
                <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full text-black bg-white/20 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
      <button type="submit" className="btn mt-3 w-full bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Reset</button>
     </form>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default ForgetPassword;