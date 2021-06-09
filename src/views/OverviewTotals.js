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
import DaoTotalsByType from "components/Charts/DaoTotalByType";
import DaoTotalsByNetwork from "components/Charts/DaoTotalsByNetwork";
import TotalValue from "components/StatBlocks/TotalValue";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";

function OverviewTotals(props) {
  const [totalsData, setTotalsData] = useState(null);
  // const [proposalsData, setProposalsData] = useState(null);
  // const [mebersData, setMembersData] = useState(null);
  const [valuesData, setValuesData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const apiData = await get(dataUrls.daocounts);

      console.log("apiData", apiData);
      setTotalsData(apiData);
      // setProposalsData(apiData.proposals);
      // setMembersData(apiData.members);
      const valuesRes = await get(dataUrls.totalValues);
      setValuesData(valuesRes);
    };

    setup();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="4">
            <DaoTotals data={totalsData?.moloches} title="DAOs Summoned" />
          </Col>
          <Col lg="4">
            <DaoTotalsByNetwork data={totalsData?.moloches} />
          </Col>
          <Col lg="4">
            <DaoTotalsByType data={totalsData?.moloches} />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <TotalValue data={valuesData} />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <DaoTotals data={totalsData?.proposals} title="Proposals" />
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.members} title="Members" />
          </Col>
          <Col lg="4">
            <DaoTotals data={totalsData?.minions} title="Minions" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OverviewTotals;
