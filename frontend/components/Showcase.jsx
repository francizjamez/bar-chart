import { Box, Text } from "@airtable/blocks/ui";
import React from "react";
import { Bar } from "react-chartjs-2";
import License from "./License";

const data = {
  labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 2", "Oct 3"],
  datasets: [
    {
      backgroundColor: ["#6078FF", "#6078FF", "#6078FF", "#6078FF", "#6078FF"],
      borderColor: ["#6078FF"],
      data: ["123.0", "321.0", "212.0", "333.0", "444.4"],
      pointRadius: 0,
      lineTension: 0.2,
      borderWidth: 3,
      fill: false,
    },
  ],
};

const Showcase = () => {
  return (
    <Box display="flex" flexDirection="column">
      <License />
      <Text marginY={3} size="xlarge" fontWeight={600} textAlign="center">
        Sample Bar chart
      </Text>
      <Box>
        <Bar
          responsive={true}
          data={data}
          options={{
            maintainAspectRatio: false,
            bezierCurve: false,
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  gridLines: { display: false },

                  ticks: {
                    beginAtZero: true,
                    fontColor: "#CCC",
                    maxTicksLimit: 5,
                    callback: function (value, index, values) {
                      return value.toLocaleString("en-US", {
                        compactDisplay: "short",
                        notation: "compact",
                        minimumSignificantDigits: 3,
                        maximumSignificantDigits: 3,
                      });
                    },
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: { display: false },
                  ticks: {
                    fontColor: "#CCC",
                  },
                },
              ],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Showcase;
