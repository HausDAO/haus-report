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
import { dataUrls } from "utils/api-data";

const HausOverviewActivity = ({ label, entity }) => {
  const [bigChartData, setbigChartData] = useState("data1");
  const [fetchedData, setFetchedData] = useState({});
  const [activeData, setActiveData] = useState({});

  useEffect(() => {
    const setup = async () => {
      const rand = new Date().getTime();
      const apiData = await get(`${dataUrls.daocounts}?rand=${rand}`);
      setFetchedData(apiData[entity]);
      setbigChartData("total");
      setActiveData(preppedData(apiData[entity].total));
    };

    setup();
  }, []);

  const preppedData = (data) => {
    return {
      labels: Object.keys(data).map((monthYear) => monthYear),
      datasets: [
        {
          label: label,
          fill: true,
          borderColor: "#4ebd9e",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#4ebd9e",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#4ebd9e",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: Object.keys(data).map((monthYear) => data[monthYear]),
        },
      ],
    };
  };

  const setBgChartData = (name) => {
    setbigChartData(name);
    setActiveData(preppedData(fetchedData[name]));
  };

  return (
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">ALL DAOs</h5>
            <CardTitle tag="h2">{label}</CardTitle>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "total",
                })}
                color="info"
                id="0"
                size="sm"
                onClick={() => setBgChartData("total")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Total
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02" />
                </span>
              </Button>
              <Button
                color="info"
                id="2"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "xdai",
                })}
                onClick={() => setBgChartData("xdai")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  xDai
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-tap-02" />
                </span>
              </Button>

              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "mainnet",
                })}
                onClick={() => setBgChartData("mainnet")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Mainnet
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
                  active: bigChartData === "matic",
                })}
                onClick={() => setBgChartData("matic")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Polygon
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
