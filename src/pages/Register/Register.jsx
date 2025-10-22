
// import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  
  // const navigate = useNavigate()
  const navigate = useNavigate()

    const {createUser,setUser,profile} = use(AuthContext)

    const [show, setShow] =useState(false)
    // const [passwordError,setPasswordError] =useState('')
    
    
    
    const handleRegister =e => {
        e.preventDefault()
        const form = e.target
        const displayName = form.name.value
        const email = form.email.value
        const photoURL = form.photo.value
        const password = form.password.value
        // console.log({email,password})


          
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
            toast.error("❌ Password must be At least one uppercase and one lowercase letter andMinimum 6 characters");
            return;
        }

        createUser(email,password)
        .then(res => {
            console.log(res.user)
            toast.success('Register successful.')
            const user = res.user
            profile({displayName,photoURL})
            .then(() => {
                setUser(...user,displayName,photoURL)
        navigate(`${location.state ? location.state :'/'}`)

            })
            .catch(error =>{
                // console.log(error.message)
                setUser(user)
            })
        })
        .catch(error => {
            toast.error(error.message)
            console.log(error.message)
        })

        e.target.reset()
    }

    
// bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400
    

    return (
        <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-60 h-60 bg-yellow-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-60 h-60 bg-red-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Register Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our gaming community and unlock exclusive game. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Register
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
                {/* name */}
                <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
                {/* email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                
              </div>
                {/* password */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                //   type={show ? "text" : "password"}
                type={show ? "text" : 'password'}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[10px] top-[32px] cursor-pointer z-50"
                >
                  {show ? <FaEye size={24} /> : <IoEyeOff size={24} />}
                </span>
              </div>

              <button type="submit" className="btn text-white bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 w-full">
                Register
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-pink-500 hover:text-white font-medium underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
    </div>
    );
};

export default Register;