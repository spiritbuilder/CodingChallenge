import { Modal, Form, Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import GTBanks from "../../Assets/GTBank.png";
import { Link, useNavigate } from "react-router-dom";
export default function BankLoginModal() {
  const navigate = useNavigate();
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
                src={GTBanks}
                alt="Bank Logo"
                style={{ height: "60px", borderRadius: "50px" }}
              />
              <p>
                <Link to={`/`} className="LinkNav">
                  <GrFormClose className="overMe" />
                </Link>
              </p>
            </div>
            <div className="LoginType">
              <p>Login</p>
              <p className="personalType">Personal</p>
            </div>
            <div style={{ padding: "40px", backgroundColor: "#de4a0917" }}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="UserID or Account Number"
                    style={{ padding: "12px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ padding: "12px" }}
                  />
                </Form.Group>

                <Button variant="primary" className="LoginButton" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
