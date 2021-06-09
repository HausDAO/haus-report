import { plugins } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

function DaoTotalsByType({ data }) {
  const [chartData, setChartData] = useState({});

  const options = {
    legend: {
      position: "bottom",
    },
  };

  useEffect(() => {
    const setup = async () => {
      const purps = [
        "Clubs",
        "Grants",
        "Guilds",
        "Ventures",
        "Products",
        "Non-profit",
      ];
      const formattedData = {
        // labels: Object.keys(data.purpose).map((purp) => purp),
        labels: purps,
        datasets: [
          {
            // data: Object.keys(data.purpose).map((purp) => data.purpose[purp]),
            data: purps.map((purp) => data.purpose[purp]),
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
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
            <CardTitle tag="h2">DAOs by Purpose</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        {chartData && <Pie data={chartData} options={options} />}
      </CardBody>
    </Card>
  );
}

export default DaoTotalsByType;
