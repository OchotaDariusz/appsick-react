import React from "react";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import User from "../../assets/icons/User.svg";
import footer from "../../assets/background/footer.png";

export default function Footer() {
  return (
    <div className="mt-auto footer rounded-4 green-shadow bg-opacity-75">
      <div className="row text-dark p-2 align-text-bottom">
        <div className="col-8">
          <div className="row align-content-between">
            <div className="col-2">
              <Link
                className="fs-4 nav-link d-flex align-items-center px-3"
                to={"/about"}
              >
                <img
                  src={User}
                  alt="user"
                  style={{ height: "30px" }}
                  className="me-2"
                />
                About us
              </Link>

              <div className="fs-4">
                <Link
                  className="nav-link d-flex align-items-center px-3"
                  to={"/credits"}
                >
                  <FontAwesomeIcon icon={faHandshake} className="me-2" />
                  Credits
                </Link>
              </div>
            </div>
            <div className="col-auto align-content-end">
              <img
                src={footer}
                alt="footer"
                style={{ height: "250px", width: "1100px" }}
                className="px-5"
              />
            </div>
          </div>
        </div>
        <div className="col-4 p-3" style={{ height: "300px" }}>
          <Map />
        </div>
      </div>
    </div>
  );
}
