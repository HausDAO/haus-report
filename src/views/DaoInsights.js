import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";

import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import { get } from "utils/requests";
import DaoTotalsByNetwork from "components/Charts/DaoTotalsByNetwork";
import { dataUrls } from "utils/api-data";
import DaoTotalsByType from "components/Charts/DaoTotalByType";

function DaosInsights(props) {
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
            <HausOverviewActivity label="DAOs Summoned" entity="moloches" />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <DaoTotalsByNetwork data={totalsData?.moloches} />
          </Col>
          <Col xs="6">
            <DaoTotalsByType data={totalsData?.moloches} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DaosInsights;
