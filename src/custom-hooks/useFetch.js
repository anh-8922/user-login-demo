import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      setData([...data]);

      setTimeout(() => setLoading(false), 500);
    };

    getData();
  }, []);

  return { loading, data };
}

export default useFetch;
