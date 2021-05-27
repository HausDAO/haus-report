import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

function DaoTotalsByNetwork({ data }) {
  const [chartData, setChartData] = useState({});

  const options = {
    legend: {
      // display: false,
      position: "bottom",
    },
  };

  useEffect(() => {
    const setup = async () => {
      const formattedData = {
        labels: ["Mainnet", "xDai", "Polygon"],
        datasets: [
          {
            data: [data.totals.main, data.totals.xdai, data.totals.matic],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
            ],
            borderWidth: 0,
          },
        ],
      };

      setChartData(formattedData);
    };

    if (data) {
      setup();
    }
  }, [data]);

  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="text-left">
            <h5 className="card-category">Total</h5>
            <CardTitle tag="h2">DAOs by Network</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        {chartData && <Pie data={chartData} options={options} />}
      </CardBody>
    </Card>
  );
}

export default DaoTotalsByNetwork;
