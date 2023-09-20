import { useState } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue((prev) => !prev);

  return [value, toggleValue];
}

export default useToggle;
