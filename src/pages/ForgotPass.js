import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPass(props) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!usernameOrEmail) return;

    const response = await axios.post("/users/forgotpass", { usernameOrEmail });
    console.log("🚀 ~ response:", response);

    if (response.data.success)
      alert(
        "Thank you we have sent you an email with instructions on how to change your pass"
      );

    navigate("/");
  };

  return (
    <div className="bg-blue-500 w-screen  ">
      <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
        <div className="text-slate-100 items-center">
          <div className="text-center pb-3">Welcome at social app!</div>
          <div className="text-center pb-3">Forgot your password?</div>
        </div>

        <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              placeholder="Email or username"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
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
              <div className="flex ">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
