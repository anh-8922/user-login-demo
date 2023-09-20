import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EmailConfirm(props) {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function sendData() {
      const response = await axios.post("/users/emailconfirm", { token });
      console.log("🚀 ~ reponse:", response);

      if (response.data.success) {
        setTimeout(() => navigate("/"), 3000);
      } else {
        alert("Not valid token");
      }
    }

    sendData();
  }, []);

  return (
    <div>
      <p>Thanks for visiting</p>
      <p>We are verifying your email</p>
      <p>Once it's ready you will be redirected to the login page</p>

      <p>Your token is {token}</p>
    </div>
  );
}
