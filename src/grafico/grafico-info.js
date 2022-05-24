import React from "react";
import { Chart } from "react-google-charts";
import { graficoLog } from "./grafico-log";


export var dataShow = [];

export function AddDate(ADate, AType) {
  let found = false;

  if (dataShow.length > 0) {
    let newDataShow = dataShow.map((info) => {
      if (info[0] === ADate) {
        found = true;
        info[1] += 1;

        if (AType === "INFO") info[2] += 1;

        return info;
      } else return info;
    });

    if (!found) {
      var InfoCount = 0;
      if (AType === "INFO") InfoCount = 1;

      dataShow.push([ADate, 1, InfoCount]);
    }
  } else {
    var InfoCount = 0;

    if (AType === "INFO") InfoCount = 1;

    dataShow = [
      ["Year", "Todos", "Info"],
      [ADate, 1, InfoCount]
    ];
  }
}

export function Start() {
    graficoLog.forEach((index) => {
    AddDate(index.date, index.type);
  });
}

Start();

export const options = {
  title: "INFO/ALL",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" }
};

export function GraficoInfo() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="250px"
      data={dataShow}
      options={options}
    />
  );
}
