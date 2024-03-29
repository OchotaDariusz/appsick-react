import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";
import maleDoctor from "../../assets/icons/Lekarz.svg";
import femaleDoctor from "../../assets/icons/Lekarka.svg";
import { Link } from "react-router-dom";
import MapModal from "../Map/MapModal";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { ViewIcon } from "@chakra-ui/icons";
import chat from "../../assets/icons/Badania.svg";

export default function TodayVisit({ visit }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="row align-items-center">
      <div className="row align-items-center text-center">
        <div className="col-2 px-3">
          <div className="col-auto rounded-3 bg-white text-dark shadow-sm p-2 border border-2 btnx">
            {visit?.date[0]}
            <hr />
            {visit?.date[1].slice(0, 5)}
          </div>
        </div>

        <div className="col-10 rounded-3 bg-white text-dark my-3 pb-3 px-4 pt-2 border border-2 btnx">
          <div className="row justify-content-between">
            <div className="col-6 my-1 fs-3 text-start">
              {visit?.doctor?.user?.firstName} {visit?.doctor?.user?.lastName}
            </div>
            <div
              className="col-auto text-capitalize text-decoration-underline"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              role="button"
            >
              <div className="fs-5 d-inline px-2">
                <ViewIcon />
              </div>
              See details
            </div>
          </div>

          <div className="row align-items-start">
            <div className="col-2">
              <img
                src={
                  visit?.doctor?.user?.image
                    ? visit?.doctor?.user?.image
                    : visit?.doctor?.user?.sex === "MALE"
                    ? maleDoctor
                    : femaleDoctor
                }
                className="img-fluid rounded-circle"
                style={{ height: "100px", width: "100px" }}
                alt="doctor"
              />
            </div>

            <div className="col-5 m-1">
              <div className="row fs-5">
                {visit?.doctor?.medicalSpecialities[0]}
                <br />
                {visit.online ? (
                  <div className="row align-items-start">Online Visit</div>
                ) : (
                  <MapModal visit={visit} />
                )}
              </div>
            </div>
          </div>

          {/*Rozsuwane*/}
          <Collapse in={open}>
            <div>
              <br />
              <hr />
              <div id="example-collapse-text">
                <div className="fs-4 m-2">
                  Visit reason:
                  <br />
                  {visit?.reason}
                </div>

                <div>
                  <hr />
                  <div className="fs-4 m-2">Visit status:</div>
                  <div>
                    {visit?.status !== "MISSED" ? (
                      <div>
                        {visit.status !== "PENDING" ? (
                          visit.status
                        ) : (
                          <div
                            className="fs-5 text-dark bg-light border border-success
                                            border-2 rounded-pill green-shadow mt-1 p-1 px-3 d-inline-flex m-2"
                          >
                            <div className="fs-2 d-inline pe-1">
                              <FiCheck />
                            </div>
                            Visit confirmed
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-danger">{visit.status}</div>
                    )}
                  </div>
                </div>
                {visit.status !== "PENDING" && visit.status !== "MISSED" ? (
                  <div>
                    <div>
                      <hr />
                      <div className="fs-4 m-2">Recommendations</div>
                      <div>Siedź na dupie i się nie odzywaj niepytany</div>
                    </div>
                    <div>
                      <hr />
                      <div className="fs-4 m-2">Prescribed medication:</div>
                      <div className=" d-inline-flex m-3 align-content-center">
                        <div className="d-flex " role="button">
                          <div className="fs-1 d-inline px-3">
                            <BsFileEarmarkPdf />
                          </div>
                          Drugs.pdf
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  {visit.status === "COMPLETED" ? (
                    <div>
                      <Link
                        to={`/visit/${visit.visitId}/history`}
                        className="btn btn-dark my-3"
                      >
                        See chat history
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div>
                  <br />
                  <hr />
                  <Link
                    to={`/visit/${visit?.visitId}`}
                    className="btn fs-5 text-dark bg-light border border-primary
                                            border-2 rounded-pill p-1 green-shadow mt-3 px-3 btnx d-inline-flex align-items-center"
                  >
                    <div className="fs-5 d-inline pe-1">
                      <img src={chat} alt="chat" style={{ height: "40px" }} />
                    </div>
                    Open chat with the doctor
                  </Link>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
