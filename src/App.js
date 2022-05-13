import './App.css';
import axios from 'axios';
import { listarLog } from './listar-log';
import { Form, Col, Table, Container, Dropdown, Row } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  listarLog.sort(function (a,b){
    return (new Date(b.data) - new Date(a.data));
  });

  const [filtro, setfiltro] = useState('TODOS');
  const [Dados, setDados] = useState(listarLog);


  let counterErro = 0;
  let counterDebug = 0;
  let counterInfo = 0;
  let counterTotal = 0;


  for (let i = 0; i < listarLog.length; i++){
    if (listarLog[i].type === 'ERRO') counterErro++;
    if (listarLog[i].type === 'DEBUG') counterDebug++;
    if (listarLog[i].type === 'INFO') counterInfo++;
    counterTotal++;

  }


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
        
        <Row>
          <Col>
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
        </Col>
        <br></br>
        <br></br>
       <Col>
        <p> Total: {counterTotal}</p>
        </Col>
        <Col>
        <p> Erros: {counterErro}</p>
        </Col>
        <Col>
        <p> Debugs: {counterDebug}</p>
        </Col>
        <Col>
        <p> Info: {counterInfo}</p>
        </Col>
        <br></br>
        
        </Row>

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
