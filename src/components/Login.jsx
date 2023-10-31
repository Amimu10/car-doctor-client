import loginImg from "../assets/images/login/login.svg";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linkedin.png";
import google from "../assets/icons/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // const user = { email, password };
    // console.log(user);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location?.state : "/") 
      })
      .catch((error) => console.log(error)); 
  };
  return (
    <div className="hero min-h-screen">
      <div className="flex md:flex-row flex-col gap-12 items-center">
        <div className="w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-md py-8 bg-[#D0D0D0]">
          <h4 className="text-center font-semibold text-4xl">Login</h4>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full h-12"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-[#FF3811] p-2 text-white rounded-md text-lg font-semibold">
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center text-lg font-medium space-y-4">
            <h5>Or Sign In with</h5>
            <div className="flex gap-3 justify-center">
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img className="w-[15px]" src={google} alt="" />
            </div>
            <h5>
              Don't Have an account?{" "}
              <Link className="text-[#FF3811]" to="/register">
                Sign Up
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
