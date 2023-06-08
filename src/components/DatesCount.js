import React from 'react';
import { Col, Row } from "react-bootstrap";


const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="dates-count">
        You have {person.length} appointments today
      </Col>
    </Row>
  );
}

export default DatesCount;
