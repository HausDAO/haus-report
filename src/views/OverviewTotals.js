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
import { Row, Col } from "reactstrap";

import DaoTotals from "components/StatBlocks/DaoTotals";
import TotalValue from "components/StatBlocks/TotalValue";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";
import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import DaoTotalsByNetwork from "components/Charts/DaoTotalsByNetwork";
import DaoTotalsByType from "components/Charts/DaoTotalByType";

function OverviewTotals(props) {
  const [totalsData, setTotalsData] = useState(null);
  const [boostDiscordData, setBoostDiscordData] = useState(null);
  const [valuesData, setValuesData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const rand = new Date().getTime();
      const apiData = await get(`${dataUrls.daocounts}?rand=${rand}`);
      const apiBoostData = await get(
        `${dataUrls.boostDiscordCounts}?rand=${rand}`
      );

      setTotalsData(apiData);
      setBoostDiscordData(apiBoostData);
      const valuesRes = await get(`${dataUrls.totalValues}?rand=${rand}`);
      setValuesData(valuesRes);
    };

    setup();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="8">
            <HausOverviewActivity label="DAOs Summoned" entity="moloches" />
          </Col>
          <Col xs="4">
            <DaoTotals data={totalsData?.moloches} title="DAOs Summoned" />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <TotalValue data={valuesData} />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <DaoTotalsByNetwork data={totalsData?.moloches} />
          </Col>
          <Col xs="4">
            <DaoTotalsByType data={totalsData?.moloches} />
          </Col>
        </Row>

        <Row>
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
