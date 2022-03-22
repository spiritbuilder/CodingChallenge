import React from "react";
import { AiOutlineCheckCircle, AiFillLock } from "react-icons/ai";
import Layout1 from "../LandingPage/Layout1";
function Success(props) {
  return (
    <div className="aback">
      <div>
        <Layout1 />
      </div>
      <div className="reuse1">
        <div
          style={{
            border: "2px solid #d4d4d4",
            borderRadius: "5px",
            padding: "20px 40px",
            margin: "50px 0",
          }}
        >
          <div className="fontCheck">
            <AiOutlineCheckCircle />
          </div>
          <div className="sentBank">
            <span>
              You've successfully
              <br />
              sent Daxlinks Global
              <br />
              your bank statement
              <br />
            </span>
          </div>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <span className="closePage">You may close this page</span>
          </div>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="lockSecure">
              <AiFillLock style={{ marginRight: "5px" }} />
              Secure with Daxlinks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Success;
