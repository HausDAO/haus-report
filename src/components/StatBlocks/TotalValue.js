import React from "react";
import { Col, Row } from "reactstrap";

import StatBlock from "components/StatBlocks/StatBlockWrapper";

function TotalValue({ data }) {
  console.log("data", data);
  const dataHeld = {
    stat: 1000000,
  };
  const dataIn = {
    stat: 1000000,
  };
  const dataOut = {
    stat: 1000000,
  };

  if (!data) {
    return null;
  }

  return (
    <Row>
      {/* <Col sm="4">
        <StatBlock
          title="Value in Banks ($)"
          subtitle="Current"
          data={dataHeld}
          mdText
        />
      </Col> */}
      <Col sm="6">
        <StatBlock
          title="Value In ($)"
          subtitle="Total"
          data={{ stat: +data.total.in.toFixed(0) }}
          mdText
        />
      </Col>
      <Col sm="6">
        <StatBlock
          title="Value Out ($)"
          subtitle="Total"
          data={{ stat: +data.total.out.toFixed(0) }}
          mdText
        />
      </Col>
    </Row>
  );
}

export default TotalValue;
