import React, { useEffect, useRef, useState } from "react";
import InputFields from "../InputFields";

import "../Login/Login.css";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Login from "../Login/Login";
import { BsArrowLeft } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../../redux/ducks/loginModal";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [pesel, setPesel] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [passwordColor, setPasswordColor] = useState("white");
  const [passwordInfo, setPasswordInfo] = useState("");
  const [confirmationColor, setConfirmationColor] = useState("white");
  const [passwordConfirmationInfo, setPasswordConfirmationInfo] = useState("");
  const formRef = useRef(null);
  const history = useHistory();

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  useEffect(() => {
    const isPasswordOk = setTimeout(() => {
      const PATTERN = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,40}$/;
      if (password.length === 0) {
        setPasswordColor("white");
        setPasswordInfo("");
      } else if (password.match(PATTERN)) {
        setPasswordColor("green");
        setPasswordInfo("");
      } else {
        setPasswordColor("salmon");
        setPasswordInfo("");
      }
    }, 1000);
    return () => {
      clearTimeout(isPasswordOk);
    };
  }, [password]);

  useEffect(() => {
    const isConfirmationOk = setTimeout(() => {
      if (password.length === 0 || passwordConfirmation.length === 0) {
        setConfirmationColor("white");
        setPasswordConfirmationInfo("");
      } else if (passwordConfirmation === password) {
        setConfirmationColor("green");
        setPasswordConfirmationInfo("");
      } else {
        setConfirmationColor("salmon");
        setPasswordConfirmationInfo("");
      }
    }, 1000);
    return () => {
      clearTimeout(isConfirmationOk);
    };
  }, [passwordConfirmation, password]);

  const submitForm = (event) => {
    event.preventDefault();
    if (
      password === passwordConfirmation &&
      password.length > 6 &&
      // pesel.length === 11 &&
      email !== ""
    ) {
      fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          birthDate: birthDate,
          telephoneNumber: telephoneNumber,
          pesel: pesel,
          sex: gender,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(JSON.stringify(response));
          formRef.current.reset();
          props.setRegisterModalShow(false);
          hideLoginModal();
        })
        .catch((err) => console.log(err.message));
      routeChange();
    } else {
      alert("nope");
    }
  };

  const dispatch = useDispatch();
  const showLoginModal = () => {
    dispatch(showModal());
  };
  const hideLoginModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div
            className="btn fs-3 text-black border
                            border-dark border-2 rounded-pill p-2 d-flex col-auto
                             nav-link  mx-auto "
            onClick={() => {
              props.setRegisterModalShow(false);
              showLoginModal();
            }}
          >
            <div className="fs-1 d-inline mx-2 d-flex align-content-center">
              <BsArrowLeft />
            </div>
            Back to Login Page
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row flex-wrap">
              <div className="col-6">
                <span className="fs-2">Registration form</span>
              </div>
              <div className="d-flex justify-content-end">
                <Login setRegisterModalShow={props.setRegisterModalShow} />
              </div>
            </div>
          </div>
          <div className="form pt-2">
            <form onSubmit={submitForm} ref={formRef} className="text-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <InputFields
                  placeholder={"Enter your first name"}
                  type={"text"}
                  set={setFirstName}
                />
                <InputFields
                  placeholder={"Enter your last name"}
                  type={"text"}
                  set={setLastName}
                />
                <InputFields
                  placeholder={"Enter your email"}
                  type={"email"}
                  set={setEmail}
                />
                <InputFields
                  info={passwordInfo}
                  color={passwordColor}
                  placeholder={"Enter your password"}
                  type={"password"}
                  set={setPassword}
                />
                <InputFields
                  info={passwordConfirmationInfo}
                  color={confirmationColor}
                  placeholder={"Confirm your password"}
                  type={"password"}
                  set={setPasswordConfirmation}
                />
                <InputFields
                  placeholder={"Enter your phone number"}
                  type={"text"}
                  set={setTelephoneNumber}
                />
                <InputFields type={"date"} set={setBirthDate} />
                <InputFields
                  placeholder={"Enter your PESEL"}
                  type={"text"}
                  set={setPesel}
                />{" "}
                {/*   TODO color/info */}
              </div>
              <div className="mt-3">
                <input
                  type="radio"
                  value="MALE"
                  onChange={handleChange}
                  name="gender"
                  className="form-check-input mx-2"
                />
                <label>Male</label>
                <input
                  type="radio"
                  value="FEMALE"
                  onChange={handleChange}
                  name="gender"
                  className="form-check-input mx-2"
                />
                <label>Female</label>
              </div>
              <br />
              <button
                className="btn fs-3 d-flex border border-dark border-2
                                rounded-pill p-2 px-4 mx-auto"
                type="submit"
              >
                Submit
                <div className="fs-1 d-inline px-3">
                  <RiSendPlaneLine />
                </div>
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
