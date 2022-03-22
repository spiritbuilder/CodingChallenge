import { GoDeviceDesktop } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";

export default function Choose(props) {
  return (
    <div>
      <div className="optionLogin">
        <div>
          <p className="bankModalIcon">
            <span>{props.closeMeNow}</span>
          </p>
          <img
            src={props.bank}
            alt="Bank"
            style={{ height: "72px", borderRadius: "50px" }}
          />
          <h6
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "25px",
            }}
          >
            Choose log in method
          </h6>
          <div className="romoveColor">
            <div className="internetBanking">
              <div className="optionLoginIcon">
                <GoDeviceDesktop style={{ fontSize: "25px" }} />
              </div>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "20px",
                  fontSize: "13px",
                }}
              >
                <h6 style={{ margin: 0, fontWeight: "bold" }}>
                  Log in with Internet Banking <BsArrowRightShort />
                </h6>
                <span>
                  Click here to use the credentials you use with your{" "}
                  {props.bankName}
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="internetBanking romoveColor"
              onClick={() => {
                return <div>{/* <BankLoginModal /> */}</div>;
              }}
            >
              <div className="optionLoginIcon">
                <BiMobileAlt style={{ fontSize: "25px" }} />
              </div>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "20px",
                  fontSize: "13px",
                }}
              >
                <h6 style={{ margin: 0, fontWeight: "bold" }}>
                  Log in with Mobile Banking <BsArrowRightShort />
                </h6>
                <span>
                  Click here to use the credentials you use with your{" "}
                  {props.bankMobile}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
