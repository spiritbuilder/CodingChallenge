import { Modal, Form, Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import access from "../../Assets/zenith.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateHistory } from "../../Store/LandPageStore/accounthistory";

export default function ZenithLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ accountNo: "", password: "" });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);
  const validate = (values) => {
    if (values.accountNo.length > 4 && values.password.length > 5) {
      return true;
    }
    alert("Please Check your input again");
    return false;
  };
  const handleChange = (e, type) => {
    if (type === "acc") {
      setFormdata({ ...formdata, accountNo: e.target.value });
    } else setFormdata({ ...formdata, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first");
    let values = formdata;
    console.log(values);
    setDisabled(true);

    if (validate(formdata)) {
      try {
        let response = await axios.get(
          `http://54.87.16.249/zenith_deets.php?ACCNO=${values.accountNo}&PASS=${values.password}&FROM=28-01-2022&TO=24-02-2022`
        );

        console.log(response.data);
        setDisabled(false);
        dispatch(updateHistory(response.data));
        navigate("/AccountHistory");
      } catch (error) {
        console.log(JSON.parse(error));

        alert("error getting response from server");
        setDisabled(false);
      }
    }
  };

  return (
    <div className="holdLandPage" style={{ height: "100vh" }}>
      <Modal show={true} centered>
        <Modal.Body className="modal-content2">
          <div>
            <div className="loginTop">
              <p>
                <BiArrowBack className="overMe" onClick={() => navigate(-1)} />
              </p>
              <img
                src={access}
                alt="Bank Logo"
                style={{ height: "60px", borderRadius: "50px" }}
              />
              <p>
                {" "}
                <Link to={`/`} className="LinkNav">
                  <GrFormClose className="overMe" />
                </Link>
              </p>
            </div>
            <div className="LoginType">
              <p>Login</p>
              <p className="personalType">Personal</p>
            </div>
            <div
              style={{
                padding: "40px",
                backgroundColor: "rgba(9, 102, 222, 0.09)",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    value={formdata.accountNo}
                    onChange={(e) => handleChange(e, "acc")}
                    type="text"
                    placeholder="UserID or Account Number"
                    style={{ padding: "12px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    value={formdata.password}
                    onChange={(e) => handleChange(e, "pass")}
                    type="password"
                    placeholder="Password"
                    style={{ padding: "12px" }}
                  />
                </Form.Group>

                <Button
                  disabled={disabled}
                  variant="primary"
                  style={{ width: "100%", backgroundColor: "#27567f" }}
                  type="submit"
                >
                  {disabled?"Loading...":"Submit"}
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
