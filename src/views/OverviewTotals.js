/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import DaoTotals from "components/StatBlocks/DaoTotals";
import TotalValue from "components/StatBlocks/TotalValue";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";

function OverviewTotals(props) {
  const [totalsData, setTotalsData] = useState(null);
  const [boostDiscordData, setBoostDiscordData] = useState(null);
  const [valuesData, setValuesData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const apiData = await get(dataUrls.daocounts);
      const apiBoostData = await get(dataUrls.boostDiscordCounts);

      console.log("apiData", apiBoostData);
      setTotalsData(apiData);
      setBoostDiscordData(apiBoostData);
      const valuesRes = await get(dataUrls.totalValues);
      setValuesData(valuesRes);
    };

    setup();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="4" className="mb-4">
            <DaoTotals data={totalsData?.moloches} title="DAOs Summoned" />
            <Link to="daos">more dao insights</Link>
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.proposals} title="Proposals" />
            <Link to="proposals">More proposal insights</Link>
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.members} title="Members" />
            <Link to="members">More member insights</Link>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <TotalValue data={valuesData} />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <DaoTotals data={boostDiscordData?.boosts} title="Boosts" />
            <Link to="boosts">More boost insights</Link>
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.minions} title="Minions Summoned" />
          </Col>
          <Col lg="4">
            <DaoTotals
              data={boostDiscordData?.discord}
              title="Discord Members"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OverviewTotals;
