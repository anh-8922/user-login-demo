import { useState } from "react";

export default function useInput(initialvalue) {
  const [value, setData] = useState(initialvalue);

  const onChange = (e) => setData(e.target.value);

  return {
    value,
    onChange,
  };
}
