import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";
// import axios from "axios";

const Register = () => {
  const { signUp, logOut } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    signUp(email, password)
      .then((result) => {
        // console.log(result.user);
        logOut();
      })
      .then((error) => {
        console.log(error);
      });
    const userInfo = {
      email: email,
      fullName: name,
    };
    // console.log("user object",userInfo)
    axios.post("http://localhost:5000/userdata", userInfo).then((res) => {
      // console.log(res.data);
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="fullname"
                name="name"
                className="input input-bordered"
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
                <a href="/login" className="label-text-alt link link-hover">
                  Login
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <input className="btn btn-primary" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
