import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Button } from "@material-ui/core";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

import "./Menu.css";

export default function Menu({ history }) {
  const [value, setValue] = useState("poomwarawat");
  const [loader, setLoader] = useState(false);

  const handleRandomValue = () => {
    const randomValue = makeid(20);
    setValue(randomValue);
  };

  const makeid = (length) => {
    var result = [];
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  };

  const handleLogout = () => {
    setLoader(true);
    setTimeout(() => {
      history.push("/");
      setLoader(false);
    }, 1000);
  };
  return (
    <div className="menu-bg">
      {loader && <Loader />}
      <div className="qr-space">
        <h3>Medicare authentication</h3>
        <p>You can show your qr code to verify</p>
        <QRCode
          value={`https://poomwarawat.com/verify?token=${value}`}
          className="box-shadow"
          style={{ width: "300px", height: "300px" }}
          renderAs="svg"
          includeMargin={true}
        />
        <button className="refresh-btn" onClick={handleRandomValue}>
          refresh
        </button>
        <div className="mt-4">
          <Link to="vaccine-record">
            {" "}
            <Button variant="contained" className="w-100 pt-2">
              vaccine record
            </Button>
          </Link>
          <Button
            variant="contained"
            className="w-100 pt-2 mt-2"
            color="secondary"
            onClick={handleLogout}
          >
            logout
          </Button>
        </div>
      </div>
    </div>
  );
}
