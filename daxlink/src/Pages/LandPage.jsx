import { Container, Row, Col } from "react-bootstrap";
import Layout1 from "../Components/LandingPage/Layout1";
import Layout2 from "../Components/LandingPage/Layout2";
import Layout3 from "../Components/LandingPage/Layout3";
import "../Styles/LandPage/LandPage.css";

export default function LandPage() {
  return (
    <div className="holdLandPage">
      <Container fluid>
        <Row>
          <Col className="colum">
            <Layout1 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Layout2 className="colum" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Layout3 className="colum" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
