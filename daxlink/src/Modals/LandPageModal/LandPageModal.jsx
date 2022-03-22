import { MdClose } from "react-icons/md";
import { AiFillLock, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandModal() {
  return (
    <div>
      <Modal show={true}>
        <Modal.Body>
          <div>
            <div className="holdModal">
              <div className="holdModalImage">
                <img
                  src="https://mono-business-assets.s3.eu-west-2.amazonaws.com/app-logo-8QvAG0FH8Hu9xNoG-Daxlinks-logo_%281%29.png"
                  alt="Logo"
                  className="modalImage"
                />
              </div>
              <Link to={`/`} className="LinkNav">
                <div className="firstMClose">
                  <MdClose
                    style={{
                      fontSize: "29px",
                      cursor: "pointer",
                      color: "#767676",
                    }}
                  />
                </div>
              </Link>
            </div>
            <div className="likeAccount">
              <p>
                Link your account <br />
                with Daxlink...
              </p>
            </div>
            <div>
              <ul className="LandUL">
                <li>
                  <div style={{ display: "flex" }}>
                    <AiFillLock
                      style={{ fontSize: "20px", marginTop: "3px" }}
                    />
                    <div style={{ marginLeft: "18px" }}>
                      <h5 style={{ fontWeight: "bold", marginBottom: "2px" }}>
                        Secured
                      </h5>
                      <p>
                        Your information is encrypted using
                        <br />
                        bank grade security
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex" }}>
                    <AiOutlineEyeInvisible
                      style={{ fontSize: "20px", marginTop: "3px" }}
                    />
                    <div style={{ marginLeft: "18px" }}>
                      <h5 style={{ fontWeight: "bold", marginBottom: "2px" }}>
                        Private
                      </h5>
                      <p>
                        Your credentials will never be made
                        <br />
                        accessible to Daxlink....
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <BsShieldCheck
                      style={{ fontSize: "20px", marginTop: "3px" }}
                    />
                    <div style={{ marginLeft: "18px" }}>
                      <h5 style={{ fontWeight: "bold", marginBottom: "2px" }}>
                        Protected
                      </h5>
                      <p>
                        Daxlink... doesn't have access to
                        <br />
                        move your funds.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "rgb(118, 118, 118)",
                }}
              >
                By clicking the button below you agree to{" "}
                <span style={{ textDecoration: "underline" }}>
                  Daxlinks T&C.
                </span>
              </p>
              <Link to={`/LandModal2`} className="LinkNav">
                <div style={{ textAlign: "center", margin: "20px 0" }}>
                  <button className="clickCon">Click to continue</button>
                </div>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
