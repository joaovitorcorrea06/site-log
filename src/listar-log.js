
export const listarLog =  
    [
      {
          "data": "2022-05-01",
          "time": "08:00:00",
          "type": "DEBUG",
          "mensagem": "minha mensagem"
      },
      {
          "data": "2022-05-02",
          "time": "08:06:00",
          "type": "INFO",
          "mensagem": "minha mensagem de info"
      },
      {
          "data": "2022-05-03",
          "time": "08:07:00",
          "type": "ERRO",
          "mensagem": "minha mensagem de teste"
      }
  ];

  function dataFormat(d){
   
    var d_split = d.split("/");
    var dia = d_split[0];
    var mes = d_split[1]-1;
    var ano = d_split[2];
 
    return [dia,mes,ano];
 }

  // listarLog.sort(function(a,b)) {
  //   return a.dia < b.dia ? -1 : a.dia > b.dia ? 1 : 0
  // }
