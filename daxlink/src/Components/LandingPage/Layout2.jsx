import { Fragment } from "react";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import money from "../../Assets/payments-cuate.png";

export default function Layout2() {
  return (
    <div className="holdBgImage">
      <img src={money} alt="Money" style={{ height: "650px" }} />
      <div className="holdContent">
        <div className="divContent">
          <div>
            <img
              src="https://mono-business-assets.s3.eu-west-2.amazonaws.com/app-logo-8QvAG0FH8Hu9xNoG-Daxlinks-logo_%281%29.png"
              alt="Logo"
              height="85px"
            />
          </div>
          <Fragment>
            <h1 className="requst">
              <span>Daxlinks Global </span>is
              <br /> requesting your bank
              <br /> statement
            </h1>
          </Fragment>
          <div>
            <input
              type="text"
              name="Compnamy"
              id="coponent"
              disabled
              placeholder="Daxlinks Global Statement of account"
              className="company"
            />

            <input
              type="email"
              name="Compnamy"
              id="coponent"
              placeholder="Enter your email.address or phone number"
              className="company2"
            />
          </div>
          <div>
            <Link to={`/LandModal1`} className="LinkNav">
              <button className="Conti">Continue</button>
            </Link>
          </div>
          <div className="holdSecure">
            <div className="holdSecure2">
              <AiFillLock style={{ marginRight: "5px" }} />
              <span>Your information is secure with Daxlinks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
