import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";

import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";
import DaoTotals from "components/StatBlocks/DaoTotals";

function BoostInsights(props) {
  const [totalsData, setTotalsData] = useState(null);
  const [boostDiscordData, setBoostDiscordData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const apiData = await get(dataUrls.daocounts);
      const apiBoostData = await get(dataUrls.boostDiscordCounts);

      setTotalsData(apiData);
      setBoostDiscordData(apiBoostData);
    };

    setup();
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="8">
            <HausOverviewActivity label="Minions Added" entity="minions" />
          </Col>

          <Col lg="4">
            <DaoTotals data={boostDiscordData?.boosts} title="Boosts" />
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.minions} title="Minions Summoned" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default BoostInsights;
