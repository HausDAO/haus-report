import React, { useEffect, useState } from "react";

import StatBlock from "components/StatBlocks/StatBlockWrapper";

function DaoTotals({ data }) {
  const [totalsData, setTotalsData] = useState({
    stat: "",
    avg: "",
    avgUnit: "month",
  });

  useEffect(() => {
    const setup = async () => {
      setTotalsData({
        stat: data.totals.total,
        avg: data.totals.avgPerMonth.toFixed(2),
        avgUnit: "month",
      });
    };

    if (data) {
      setup();
    }
  }, [data]);

  return <StatBlock title="DAOs Summoned" subtitle="Total" data={totalsData} />;
}

export default DaoTotals;
