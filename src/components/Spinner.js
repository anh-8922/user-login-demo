import { useId } from "react";
import "./Spinner.css";
function Spinner(props) {
  const id = useId();
  console.log("🚀 ~ id SPINNER:", id);

  return (
    <div className="lds-roller" id={id}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
