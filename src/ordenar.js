import { listarLog } from './listar-log';

function dataFormat(d){
   
    var d_split = d.split("/");
    var dia = d_split[0];
    var mes = d_split[1]-1; // diminui por 1 porque os meses começam com 0
    var ano = d_split[2];
 
    return [dia,mes,ano];
 }



