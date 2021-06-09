import React from "react";
import { Col, Row } from "reactstrap";

import StatBlock from "components/StatBlocks/StatBlockWrapper";

function TotalValue({ data }) {
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
