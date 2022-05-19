import React from "react";
import { Chart } from "react-google-charts";
import { graficoLog } from "./grafico-log";


  let counterTrace = 0;
  let counterDebug = 0;
  let counterInfo = 0;
  let counterSuccess = 0;
  let counterWarn = 0;
  let counterError = 0;
  let counterFatal = 0;
  let dia = 0;

  for (let i = 0; i < graficoLog.length; i++) {
    if (graficoLog[i].method === 'TRACE') counterTrace++;
    if (graficoLog[i].method === 'DEBUG') counterDebug++;
    if (graficoLog[i].method === 'INFO') counterInfo++;
    if (graficoLog[i].method === 'SUCCESS') counterSuccess++;
    if (graficoLog[i].method === 'WARN') counterWarn++;
    if (graficoLog[i].method === 'ERROR') counterError++;
    if (graficoLog[i].method === 'FATAL') counterFatal++;
    // data.push({dia},counterTrace,counterDebug,counterInfo,counterSuccess,counterWarn,counterError,counterFatal])
    // dia++;
  }

export const data = [
  ["Dia", "TRACE", "DEBUG", "INFO", "SUCCESS", "WARN", "ERROR", "FATAL"],
  ["01", 1,2,3,5,4,6,7]
  // ["02", counterTrace,counterDebug,counterInfo,counterSuccess,counterWarn,counterError,counterFatal],
  // ["03", 1,2,3,5,4,6,7],
  // ["04", 5,2,6,8,4,5,9],
  // ["05", 1,2,3,5,4,6,7],
  // ["06", 5,2,6,8,4,5,9],
  // ["07", 1,2,3,5,4,6,7],
  // ["08", 5,2,6,8,4,5,9],
  // ["09", 1,2,3,5,4,6,7],
  // ["10", 5,2,6,8,4,5,9],
  // ["11", 1,2,3,5,4,6,7],
  // ["12", 5,2,6,8,4,5,9],
  // ["13", 1,2,3,5,4,6,7],
  // ["14", 5,2,6,8,4,5,9],
  // ["15", 1,2,3,5,4,6,7],
  // ["16", 5,2,6,8,4,5,9],
  // ["17", 1,2,3,5,4,6,7],
  // ["18", 5,2,6,8,4,5,9],
  // ["19", 1,2,3,5,4,6,7],
  // ["20", 5,2,6,8,4,5,9],
  // ["21", 1,2,3,5,4,6,7],
  // ["22", 5,2,6,8,4,5,9],
  // ["23", 1,2,3,5,4,6,7],
  // ["24", 5,2,6,8,4,5,9],
  // ["25", 1,2,3,5,4,6,7],
  // ["26", 5,2,6,8,4,5,9],
  // ["27", 1,2,3,5,4,6,7],
  // ["28", 5,2,6,8,4,5,9],
  // ["29", 1,2,3,5,4,6,7],
  // ["30", 5,2,6,8,4,5,9],
  // ["31", 1,2,3,5,4,6,7],
];

export const options = {
  title: "Requisições",
  hAxis: { title: "Dia", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
};

export function Grafico() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
}
