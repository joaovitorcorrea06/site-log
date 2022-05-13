
export let listarLog =  
    [
      {
          "data": "2022-05-01",
          "time": "08:00:00",
          "type": "DEBUG",
          "mensagem": "minha mensagem"
      },
      {
          "data": "2022-05-04",
          "time": "08:05:00",
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
      },
      {
          "data": "2022-05-05",
          "time": "08:07:00",
          "type": "ERRO",
          "mensagem": "minha mensagem de teste"
      },
      {
          "data": "2022-05-07",
          "time": "08:07:00",
          "type": "ERRO",
          "mensagem": "minha mensagem de teste"
      }
  ];

//   function dateFormat(d){
   
//     var d_split = d.split("-");
//     var ano = d_split[0];
//     var mes = d_split[1]-1;
//     var dia = d_split[2];
 
//     return [dia,mes,ano];
//  }

//   dateFormat(listarLog).sort(function(a,b) {
//     return a.dia < b.dia 
//   });



//     listarLog.sort(function(a, b) {
//     // aqui vai converter "data" para um object Date
//     // a seguir "vê qual é maior"
//     return (new Date(a.data) - new Date(b.data));
//   });

//   console.log(listarLog);




// function ordemDecrescente(a, b) {
//     return a.data < b.data;
// }

// listarLog.sort(ordemDecrescente);
  
