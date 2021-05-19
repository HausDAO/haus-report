import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import classNames from "classnames";

import { chartExample1 } from "variables/charts.js";
import { get } from "utils/requests";

const HausOverviewActivity = () => {
  const [bigChartData, setbigChartData] = useState("data1");
  const [activeData, setActiveData] = useState({});

  useEffect(() => {
    const setup = async () => {
      const apiData = await get(
        "https://daohaus-metadata.s3.amazonaws.com/daohaus-report-overview-dao-by-month.json"
      );

      setActiveData({
        labels: Object.keys(apiData).map((monthYear) => monthYear),
        datasets: [
          {
            label: "daos summoned on xdai",
            fill: true,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: Object.keys(apiData).map((monthYear) => apiData[monthYear]),
          },
        ],
      });
    };

    setup();
  }, []);

  const setBgChartData = (name) => {
    const dude = chartExample1[name];
    console.log("dude", dude);
    setbigChartData(name);
  };

  return (
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">ALL DAOs</h5>
            <CardTitle tag="h2">Activity</CardTitle>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data1",
                })}
                color="info"
                id="0"
                size="sm"
                onClick={() => setBgChartData("data1")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Daos Summoned
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02" />
                </span>
              </Button>
              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data2",
                })}
                onClick={() => setBgChartData("data2")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Proposals
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-gift-2" />
                </span>
              </Button>
              <Button
                color="info"
                id="2"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data3",
                })}
                onClick={() => setBgChartData("data3")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Members
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-tap-02" />
                </span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Line
            // data={chartExample1[bigChartData]}
            data={activeData}
            options={chartExample1.options}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default HausOverviewActivity;
