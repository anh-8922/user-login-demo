import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/users/list");
      console.log("🚀 ~ data:", data);

      setUsers(data.data.users);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {users.map((item, idx) => (
        <div key={idx}>{item.email}</div>
      ))}
    </div>
  );
}

export default App;
