import { Col, Container, Row } from "react-bootstrap";
import { BusMatrix } from "../components/BusMatrix";
import { FormContact } from "../components/FormContact";

export const DetailPage = () => {
    return (
            <Container className="mt-5">
                <Row>
                    <Col>
                        <BusMatrix/>
                    </Col>
                    <Col>
                        <FormContact/>
                    </Col>
                </Row>
            </Container>
    );
  }