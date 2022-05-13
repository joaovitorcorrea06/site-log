import './App.css';
import { listarLog } from './listar-log';
import { Col, Table, Container, Dropdown, Row, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  //Ordenação descrescente pela data
  listarLog.sort(function (a,b){
    return (new Date(b.data) - new Date(a.data));
  });

  const [filtro, setfiltro] = useState('TODOS');
  const [Dados, setDados] = useState(listarLog);

  let counterErro = 0;
  let counterDebug = 0;
  let counterInfo = 0;
  let counterTotal = 0;

  //Contador 
  for (let i = 0; i < listarLog.length; i++){
    if (listarLog[i].type === 'ERRO') counterErro++;
    if (listarLog[i].type === 'DEBUG') counterDebug++;
    if (listarLog[i].type === 'INFO') counterInfo++;
    counterTotal++;
  }

  //Filtrar por tipo
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
        
        <Row className='bg-dark align-items-center'>
          <Col sm={7}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size='lg'>
            FILTRO: {filtro}
          </Dropdown.Toggle>

          <Dropdown.Menu >

            <Dropdown.Item  onClick={()=>{
              busca("TODOS")
            }}>TODOS</Dropdown.Item>

            <Dropdown.Item onClick={()=>{
              busca('ERRO')
            }} >ERRO</Dropdown.Item>
              
            <Dropdown.Item onClick={()=>{
              busca('INFO')
            }}>INFO</Dropdown.Item>

            <Dropdown.Item onClick={()=>{
              busca('DEBUG')
            }}>DEBUG</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        </Col>
        <Col>
        </Col>

        <Col lg={1.5}>
        <Button size='lg' variant="info" onClick={()=>{busca('TODOS')}}> TOTAL: {counterTotal}</Button>
        </Col>
        <Col lg={1.5}>
        <Button size='lg' variant="danger" onClick={()=>{busca('ERRO')}}> ERROS: {counterErro}</Button>
        </Col>
        <Col lg={1.5}>
        <Button size='lg' variant="primary" onClick={()=>{busca('DEBUG')}}> DEBUGS : {counterDebug}</Button>
        </Col>
        <Col lg={1.5}>
        <Button size='lg' variant="warning" onClick={()=>{busca('INFO')}}> INFO: {counterInfo}</Button>
        </Col>
        <br></br>
        
        </Row>

        <Table bordered hover table-sm>
        <thead >
          <tr>
            <th className='col-1'>Type</th>
            <th className='col-1'>Data</th>
            <th className='col-1'>Hora</th>
            <th >Mensagem</th>
          </tr>
        </thead>
          {Dados.map(function(dado){
            if (dado.type=== "ERRO")
            return (
              <tbody>
              <tr>
                <td className='table-danger' >{dado.type}</td>
                <td >{dado.data}</td>
                <td >{dado.time}</td>
                <td >{dado.mensagem}</td>
              </tr>
            </tbody> )

            if (dado.type=== "DEBUG")
            return (
              <tbody>
              <tr>
                <td className='table-primary' >{dado.type}</td>
                <td >{dado.data}</td>
                <td >{dado.time}</td>
                <td >{dado.mensagem}</td>
              </tr>
            </tbody>)

            if (dado.type=== "INFO")
            return (
              <tbody>
              <tr>
                <td className='table-warning' >{dado.type}</td>
                <td >{dado.data}</td>
                <td >{dado.time}</td>
                <td >{dado.mensagem}</td>
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
