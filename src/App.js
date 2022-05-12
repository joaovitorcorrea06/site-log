import './App.css';
import axios from 'axios';
import { listarLog } from './listar-log';
import { Form, Col, Table } from 'react-bootstrap';

function App() {


  // function mostrarLog(){
  //   axios.get('log.json')
  //   .then(res=> res.data.map(function(dado){
  //     return (
  //     <li>{dado.mensagem}</li>)}))
  //   .catch(err=>alert('nao peguei'))
  // }

  return (
    <div>
      <h1> Log </h1>
      <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Mensagem</th>
        </tr>
      </thead>
        {listarLog.map(function(dado){
          return (
            <tbody>
            <tr>
              <td>{dado.type}</td>
              <td>{dado.data}</td>
              <td>{dado.time}</td>
              <td>{dado.mensagem}</td>
            </tr>
          </tbody> 
        )})} 
        
      </Table>
      
    </div>
  );
}

export default App;
