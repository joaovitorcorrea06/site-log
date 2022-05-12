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
  const [Dados, setDados] = useState([]);
  // setDados(listarLog);

  function busca(tipo) {
    console.log(tipo)
    let res = listarLog.map(function(item){
      if (item.type === tipo){
        console.log(item)
        return item;
      }})
      console.log(res)
    setDados(res)
  }


  return (

    <Container fluid>
      <div>
        <h1> Log </h1>
        <br></br>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            FILTRO
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{
              setfiltro('ERRO')
              busca('ERRO')
            }} >ERRO</Dropdown.Item>
              
            <Dropdown.Item onClick={()=>{
              setfiltro ('INFO')
              busca('INFO')
            }}>INFO</Dropdown.Item>

            <Dropdown.Item onClick={()=>{
              setfiltro ('DEBUG')
            }}>DEBUG</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
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
