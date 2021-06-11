import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";

import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";
import DaoTotals from "components/StatBlocks/DaoTotals";

function ProposalInsights(props) {
  const [totalsData, setTotalsData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const apiData = await get(dataUrls.daocounts);
      setTotalsData(apiData);
    };

    setup();
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="8">
            <HausOverviewActivity
              label="Proposals Submitted"
              entity="proposals"
            />
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.proposals} title="Proposals" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProposalInsights;
