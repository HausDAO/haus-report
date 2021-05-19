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
import React from "react";
import { Row, Col } from "reactstrap";

import HausOverviewActivity from "components/Charts/HausOverviewActivity";

function Dashboard(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <HausOverviewActivity />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
