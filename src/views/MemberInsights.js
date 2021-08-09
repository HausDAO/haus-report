import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";

import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";
import DaoTotals from "components/StatBlocks/DaoTotals";

function MemberInsights(props) {
  const [totalsData, setTotalsData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const rand = new Date().getTime();
      const apiData = await get(`${dataUrls.daocounts}?rand=${rand}`);
      setTotalsData(apiData);
    };

    setup();
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="8">
            <HausOverviewActivity label="Members Added" entity="members" />
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.members} title="Members" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MemberInsights;
