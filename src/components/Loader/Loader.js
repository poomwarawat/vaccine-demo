import React from "react";
import { Spinner } from "reactstrap";

import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-bg">
      <div className="spinner-item">
        <Spinner style={{ width: "3rem", height: "3rem", color: "white" }} />
      </div>
    </div>
  );
}
