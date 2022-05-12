import './App.css';
import axios from 'axios';
import { listarLog } from './listar-log';
import { Form, Col, Table, Container, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  listarLog.sort(function (a,b){
    return (new Date(b.data) - new Date(a.data));
  });

  const [filtro, setfiltro] = useState('TODOS');
  const [Dados, setDados] = useState(listarLog);
  const [contTotal, setContTotal] = useState(0);
  const [contErro, setContErro] = useState(0);
  const [contDebug, setContDebug] = useState(0);
  const [contInfo, setContInfo] = useState(0);


  function busca(tipo) {
    setfiltro(tipo)
    let res = listarLog.filter(function(item){
      if (tipo === "TODOS")
      return item;
      if (item.type === tipo){
        return item;
      }})
    setDados(res)
  }

  


  return (

    <Container fluid>
      <div>
        <h1> Log </h1>
        <br></br>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            FILTRO: {filtro}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{
              busca('ERRO')
            }} >ERRO</Dropdown.Item>
              
            <Dropdown.Item onClick={()=>{
              busca('INFO')
            }}>INFO</Dropdown.Item>

            <Dropdown.Item onClick={()=>{
              busca('DEBUG')
            }}>DEBUG</Dropdown.Item>

            <Dropdown.Item onClick={()=>{
              busca("TODOS")
            }}>TODOS</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <br></br>
        <p> Total: {contTotal}</p>
        <p> Erros: {contErro}</p>
        <p> Debugs: {contDebug}</p>
        <p> Info: {contInfo}</p>
        <br></br>

        <Table bordered hover>
        <thead>
          <tr>
            <th>Type</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Mensagem</th>
          </tr>
        </thead>
          {Dados.map(function(dado){
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

        <p>Filtro: {filtro}</p>
        
      </div>
    </Container>
  );
}

export default App;
