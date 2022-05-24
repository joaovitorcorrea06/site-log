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

        if (AType === "DEBUG") info[2] += 1;

        return info;
      } else return info;
    });

    if (!found) {
      var DebugCount = 0;
      if (AType === "DEBUG") DebugCount = 1;

      dataShow.push([ADate, 1, DebugCount]);
    }
  } else {
    var DebugCount = 0;

    if (AType === "DEBUG") DebugCount = 1;

    dataShow = [
      ["Year", "Todos", "Debug"],
      [ADate, 1, DebugCount]
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
  title: "DEBUG/ALL",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" }
};

export function GraficoDebug() {
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
