import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { numberWithCommas } from "utils/general";

const StatBlock = ({ title, subtitle, data, mdText }) => {
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="text-left">
            <h5 className="card-category">{subtitle}</h5>
            <CardTitle tag="h2">{title}</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row className={`stat-block-stat${mdText ? " md" : ""}`}>
          <Col className="text-left">
            <p>{numberWithCommas(data.stat)}</p>
            {data.avg && (
              <p className="stat-block-avg">{`${data.avg} per ${data.avgUnit} avg`}</p>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default StatBlock;
