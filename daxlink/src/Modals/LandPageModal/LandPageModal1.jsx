import { MdClose } from "react-icons/md";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import GTBank from "../Banks/GTBank";
import AccessBank from "../Banks/AccessBank";
import BankList from "../Banks/BankList";
import kuda from "../../Assets/kuda.png";
import Zanith from "../Banks/Zanith";
import FirstBank from "../Banks/FirstBank";

export default function LandModal2() {
  const navigate = useNavigate();
  const [activeNow, setActiveNow] = useState(true);
  const personal = () => {
    setActiveNow(true);
  };
  const business = () => {
    setActiveNow(false);
  };

  // const closeTo = () => {
  //   setShowNow(false);
  //   console.log(showNow);
  // };
  return (
    <div className="holdLandPage" style={{ height: "100vh" }}>
      <Modal show={true}>
        <Modal.Body>
          <div>
            <div className="holdModal oldModal2">
              <div className="firstMClose" onClick={() => navigate(-1)}>
                <BiArrowBack style={{ fontSize: "29px", cursor: "pointer" }} />
              </div>
              <div>
                <span>Choose your bank</span>
              </div>
              <Link to={`/`} className="LinkNav">
                <div className="firstMClose">
                  <MdClose
                    style={{
                      fontSize: "29px",
                      cursor: "pointer",
                      color: "#5b5b5b",
                    }}
                  />
                </div>
              </Link>
            </div>

            <div className="LandModal">
              <AiOutlineSearch style={{ fontSize: "25px", color: "gray" }} />
              <div style={{ width: "85%" }}>
                <input
                  type="text"
                  className="kokoSearch"
                  name=""
                  placeholder="Search for your bank"
                />
              </div>
            </div>

            <div>
              <div className="accountType">
                <div
                  // className={`banner ${active ? "active" : ""}`}
                  className={`Beforeactive ${activeNow ? "activeAcc" : ""}`}
                  onClick={personal}
                  style={{ cursor: "pointer" }}
                >
                  <span>Personal</span>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className={`Beforeactive ${activeNow ? "" : "activeAcc"}`}
                  onClick={business}
                >
                  <span>Business</span>
                </div>
              </div>

              <GTBank />
              <AccessBank />
              <div className="listB">
                <BankList BankImage={kuda} BankName="Kuda Bank" />
              </div>
              <FirstBank />
              <Zanith />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
