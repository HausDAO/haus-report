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
import HausOverviewActivity from "components/Charts/HausOverviewActivity";
import { get } from "utils/requests";
import { dataUrls } from "utils/api-data";

function OverviewTotals(props) {
  const [totalsData, setTotalsData] = useState(null);
  const [valuesData, setValuesData] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const apiData = await get(dataUrls.daocounts);
      setTotalsData(apiData);
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
            <DaoTotals data={totalsData} />
          </Col>
          <Col lg="4">
            <DaoTotalsByNetwork data={totalsData} />
          </Col>
          <Col lg="4">
            <DaoTotalsByType data={totalsData} />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <TotalValue data={valuesData} />
          </Col>

          {/* <Col lg="4">
            <DaoTotalsByNetwork />
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default OverviewTotals;
