import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AppContext } from "../components/Context";

function LoginResponsive(props) {
  const navigate = useNavigate();

  const { dispatch } = useContext(AppContext);
  const [userData, setUserData] = useState({
    usernameoremail: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!userData.usernameoremail)
        return setError("Email and password are mandatory");

      console.log("🚀 ~ userData:", userData);

      const response = await axios.post("/users/login", userData);
      console.log("🚀 ~ response:", response);

      if (response.data.success === false) {
        return setError("Wrong user name or password");
      }

      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: { ...response.data.user },
        });

        navigate("/profile");
      }
    } catch (error) {
      console.log("🚀 ~ error:", error.message);
    }
  };

  return (
    <div className="bg-blue-500   ">
      <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
        <div className="text-slate-100 items-center">
          <svg
            className="w-10 h-10 mx-auto pb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <div className="text-center pb-3">Welcome back!</div>
        </div>

        <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="email"
              id="email"
              required
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Email address"
              onChange={(e) =>
                setUserData({ ...userData, usernameoremail: e.target.value })
              }
              value={userData.usernameoremail}
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300"
              placeholder="Password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              value={userData.password}
            />
            <span className="absolute mt-[15px] ml-[-40px] text-[2rem] text-blue-500 cursor-pointer">
              {showPass ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPass((prev) => !prev)}
                />
              ) : (
                <AiOutlineEye onClick={() => setShowPass((prev) => !prev)} />
              )}
            </span>
          </div>
          <div className="h-[30px] text-red-500">{error}</div>
          <div className="w-3/4 mb-12">
            <button
              type="submit"
              className="py-4 bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              onClick={handleSubmit}
            >
              {" "}
              LOGIN
            </button>
          </div>
        </div>
        <div className="flex justify-center container mx-auto mt-6 text-slate-100 text-sm">
          <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
            <div className="flex">
              <Link to="/forgotpass">Forgot your password</Link>
            </div>
            <div className="flex ">
              <Link to="/register">Don't have an account? Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginResponsive;
