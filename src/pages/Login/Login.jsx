import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {Login,setUser,googleLogin} =use(AuthContext)
    const [show,setShow] =useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    // const emailRef = useRef(null);
    const [email, setEmail] = useState("");


    // const [error,serError] =useState('')



const handleLogin = e=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email,password})
    Login(email,password)
    .then(res => {
        toast.success("log in successfully 🎉")
        // console.log(res.user)
        setUser(res.user)
        navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(error => {
        toast.error(error.message)
        // serError(error.message)
        // console.log(error.message)
    })
    }

    const handleGoogleSignin =()=>{
        googleLogin()
        .then(res => {
            // console.log(res.user)
            toast.success("Google Login successful! 🎉");
            // setUser(res.user)
        })
        .catch(error => {
            toast.error(error.message)
            // serError(error.message)
            // console.log(error.message)
        })
    }


// bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500

// bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400


    return (
        <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Login your account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your Gaming account, explore new
              game.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
         
              {/* <div className="text-center space-y-3">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-20 w-20 rounded-full mx-auto"
                  alt=""
                />
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-white/80">{user?.email}</p>
                <button onClick={handleSignout} className="my-btn">
                  Sign Out
                </button>
              </div> */}
         
              <form onSubmit={handleLogin} className="space-y-5">
                <h2 className="text-2xl w-full font-semibold mb-2 text-center text-white">
                  LogIn
                </h2>
                    {/* email */}
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // ref={emailRef}
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                    {/* password */}
                <div className="relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    // type={show ? "text" : "password"}

                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input mb-1 input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <span
                    // onClick={() => setShow(!show)}
                    onClick={() => setShow(!show)}
                    className="absolute right-[10px] top-[32px] cursor-pointer z-50"
                  >
                    {show ? <FaEye size={24} /> : <IoEyeOff size={24} />}
                  </span>
                  <Link to='/forgetPassword'  state={{ email: email }} className="cursor-pointer hover:text-blue-300">Forget Password</Link>
                {/* <p className="mt-2 cursor-pointer hover:text-blue-300">Forget Password</p> */}
                </div>
                {/* {
                    error && <p>{error}</p>
                } */}

                <button type="submit" className="btn text-white bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 w-full">
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="h-px w-32 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-32 bg-white/30"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="btn text-white flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 px-5 py-2 rounded-lg w-full font-semibold  cursor-pointer"
                >
                  <FcGoogle size={24} />
                  Login with Google
                </button>

                <p className="text-center text-sm text-white/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-yellow-500 hover:text-white underline"
                  >
                    Register
                  </Link>
                </p>
              </form>
           
          </div>
        </div>
      
    </div>
    );
};

export default Login;