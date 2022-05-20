import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { graficoLog } from "./grafico-log";




  // let counterTrace = 0;
  // let counterDebug = 0;
  // let counterInfo = 0;
  // let counterSuccess = 0;
  // let counterWarn = 0;
  // let counterError = 0;
  // let counterFatal = 0;
  // let dia = 1;

  
  // for (let i = 0; i < graficoLog.length; i++) {
  //   if (graficoLog[i].method === 'TRACE') counterTrace++;
  //   if (graficoLog[i].method === 'DEBUG') counterDebug++;
  //   if (graficoLog[i].method === 'INFO') counterInfo++;
  //   if (graficoLog[i].method === 'SUCCESS') counterSuccess++;
  //   if (graficoLog[i].method === 'WARN') counterWarn++;
  //   if (graficoLog[i].method === 'ERROR') counterError++;
  //   if (graficoLog[i].method === 'FATAL') counterFatal++;
  //   // data = [...+[dia.toString,counterTrace,counterDebug,counterInfo,counterSuccess,counterWarn,counterError,counterFatal]]
  //   // dia = dia +1;
  // }

// export let data = [
//   ["Dia", "TRACE", "DEBUG", "INFO", "SUCCESS", "WARN", "ERROR", "FATAL"],
  // ["01", 1,2,3,5,4,6,7],
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
//   // ["31", 1,2,3,5,4,6,7],
// ];


export var dataShow = [];

export function AddDate(ADate, AType) {
  let found = false;

  if (dataShow.length > 0) {
    let newDataShow = dataShow.map((info) => {
      if (info[0] === ADate) {
        found = true;

        if (AType === "DEBUG") info[1] += 1;
        if (AType === "ERROR") info[2] += 1;
        if (AType === "TRACE") info[3] += 1;
        if (AType === "INFO") info[4] += 1;
        if (AType === "SUCCESS") info[5] += 1;
        if (AType === "WARN") info[6] += 1;
        if (AType === "FATAL") info[7] += 1;
        return info;
      } else return info;
    });

    if (!found) {
      var DebugCount = 0;
      var ErrorCount = 0;
      var TraceCount = 0;
      var InfoCount = 0;
      var SuccessCount = 0;
      var WarnCount = 0;
      var FatalCount = 0;

      if (AType === "DEBUG") DebugCount = 1;
      if (AType === "ERROR") ErrorCount = 1;
      if (AType === "TRACE") TraceCount = 1;
      if (AType === "INFO") InfoCount = 1;
      if (AType === "SUCCESS") SuccessCount = 1;
      if (AType === "WARN") WarnCount = 1;
      if (AType === "FATAL") FatalCount = 1;

      dataShow.push([
        ADate,
        DebugCount,
        ErrorCount,
        TraceCount,
        InfoCount,
        SuccessCount,
        WarnCount,
        FatalCount
      ]);
    }
  } else {
    var DebugCount = 0;
    var ErrorCount = 0;
    var TraceCount = 0;
    var InfoCount = 0;
    var SuccessCount = 0;
    var WarnCount = 0;
    var FatalCount = 0;

    if (AType === "DEBUG") DebugCount = 1;
    if (AType === "ERROR") ErrorCount = 1;
    if (AType === "TRACE") TraceCount = 1;
    if (AType === "INFO") InfoCount = 1;
    if (AType === "SUCCESS") SuccessCount = 1;
    if (AType === "WARN") WarnCount = 1;
    if (AType === "FATAL") FatalCount = 1;

    dataShow = [
      [
        "Year",
        "Debug",
        "Error",
        "Trace",
        "Info",
        "Success",
        "Warn",
        "Fatal"
      ],
      [
        ADate,
        DebugCount,
        ErrorCount,
        TraceCount,
        InfoCount,
        SuccessCount,
        WarnCount,
        FatalCount
      ]
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
  title: "Por tipo",
  hAxis: { title: "Dia", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
};

export function Grafico() {

//   const [ano, setAno] = useState(2022);
//   const [mes,setMes] = useState();
//   const [grafico, setGrafico] = useState(data);

//   graficoLog.map(function(dado){
//     if (dado.date=== new Date(ano, mes)){
//       while (dado.date=== new Date(ano,mes,dia) && dia <= 31) { 
//           if (dado.method === 'DEBUG') counterDebug++;
//           if (dado.method === 'ERROR') counterError++;
//           if (dado.method === 'TRACE') counterTrace++;
//           if (dado.method === 'INFO') counterInfo++;
//           if (dado.method === 'SUCCESS') counterSuccess++;
//           if (dado.method === 'WARN') counterWarn++;
//           if (dado.method === 'FATAL') counterFatal++;
//           setGrafico([...+[dia.toString,counterTrace,counterDebug,counterInfo,counterSuccess,counterWarn,counterError,counterFatal]]);
//           dia = dia + 1;
//       }}
//     })


  return (
    // <>
    // <label>Ano</label>
    // <input onChange={(e)=>{
    //       setAno(e.target.value)          
    //       }}></input>
    // <label>Mes</label>
    // <input onChange={(e)=>{
    //       setMes(e.target.value)          
    //       }}></input>
    // <p>{ano} - {mes}</p>

    <Chart
      chartType="AreaChart"
      width="100%"
      height="250px"
      data={dataShow}
      options={options}
      />
      // </>
  );
}
