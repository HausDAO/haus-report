import React from "react";
import { Col, Row } from "reactstrap";

import StatBlock from "components/StatBlocks/StatBlockWrapper";

function TotalValue() {
  const dataHeld = {
    stat: 1000000,
  };
  const dataIn = {
    stat: 1000000,
  };
  const dataOut = {
    stat: 1000000,
  };
  return (
    <Row>
      <Col sm="4">
        <StatBlock
          title="Value in Banks ($)"
          subtitle="Current"
          data={dataHeld}
          mdText
        />
      </Col>
      <Col sm="4">
        <StatBlock title="Value In ($)" subtitle="Total" data={dataIn} mdText />
      </Col>
      <Col sm="4">
        <StatBlock
          title="Value Out ($)"
          subtitle="Total"
          data={dataOut}
          mdText
        />
      </Col>
    </Row>
  );
}

export default TotalValue;
