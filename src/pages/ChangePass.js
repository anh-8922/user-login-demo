import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ChangePass(props) {
  const { token } = useParams();
  const [pass, setPass] = useState({
    newPass: "",
    retyped: "",
  });

  const handleSubmit = async () => {
    if (!pass.newPass || pass.newPass !== pass.retyped)
      return alert("Pass don't match");

    const response = await axios.post("/users/changepass", {
      token,
      password: pass.newPass,
    });
    console.log("🚀 ~ response:", response);
  };

  return (
    <div className="bg-blue-500 w-screen  ">
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
          <div className="text-center pb-3">Welcome back at social app!</div>
          <div className="text-center pb-3">Change your password</div>
        </div>

        <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="email"
              id="pass"
              placeholder="your new password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              value={pass.newPass}
              onChange={(e) => setPass({ ...pass, newPass: e.target.value })}
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="retype your password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300"
              value={pass.retyped}
              onChange={(e) => setPass({ ...pass, retyped: e.target.value })}
            />
          </div>

          <div className="w-3/4 mb-12">
            <button
              type="submit"
              className="py-4 bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              onClick={handleSubmit}
            >
              {" "}
              SUBMIT
            </button>
          </div>
        </div>
        <div className="flex justify-center container mx-auto mt-6 mb-10 text-slate-100 text-sm">
          <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
            <Link className="hover:text-red-500" to="/">
              Do you have an account already?
            </Link>
            <Link className="hover:text-red-500" to="/register">
              <div className="flex ">Don't have an account? Get Started</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
