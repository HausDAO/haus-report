import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";

import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";

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
          <Col xs="12">
            <HausOverviewActivity
              label="Proposals Submitted"
              entity="proposals"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProposalInsights;
