import './App.css';
import { listarLog } from './listar-log';
import { Col, Table, Container, Dropdown, Row, Button, Navbar, Nav, NavDropdown, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Chart } from "react-google-charts";
import { Grafico } from './grafico/grafico';
import { GraficoTodos } from './grafico/grafico-todos'
import { GraficoDebug } from './grafico/grafico-debug';
import { GraficoErro } from './grafico/grafico-erro';
import { GraficoTrace } from './grafico/grafico-trace';
import { GraficoInfo } from './grafico/grafico-info';
import { GraficoSuccess } from './grafico/grafico-success';
import { GraficoWarn } from './grafico/grafico-warn';
import { GraficoFatal } from './grafico/grafico-fatal';

function App() {

  //Ordenação descrescente pela data
  listarLog.sort(function (a,b){
    return (new Date(b.data) - new Date(a.data));
  });

  const [filtro, setfiltro] = useState('TODOS');
  const [Dados, setDados] = useState(listarLog);
  const [filtroInput, setFiltroInput] = useState('');
  const [grafico, setGrafico] = useState("TIPO");

  

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

  function mostrarGrafico(grafico){
    if (grafico === "TOTAL")
      return(
        <GraficoTodos></GraficoTodos>
      )
    if (grafico === "TIPO")
    return(
      <Grafico></Grafico>
    )
    if (grafico === "DEBUG")
    return(
      <GraficoDebug></GraficoDebug>
    )
    if (grafico === "ERROR")
    return(
      <GraficoErro></GraficoErro>
    )
    if (grafico === "TRACE")
    return(
      <GraficoTrace></GraficoTrace>
    )
    if (grafico === "INFO")
    return(
      <GraficoInfo></GraficoInfo>
    )
    if (grafico === "SUCCESS")
    return(
      <GraficoSuccess></GraficoSuccess>
    )
    if (grafico === "WARN")
    return(
      <GraficoWarn></GraficoWarn>
    )
    if (grafico === "FATAL")
    return(
      <GraficoFatal></GraficoFatal>
    )
  }

//

  return (

    <Container fluid>
      <div>
        
        <Navbar className='bg-dark align-items-center'  sticky="top">
          <Col sm={7}>
        {/* <Dropdown>
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
        </Dropdown> */}
        <input onChange={(e)=>{
          setFiltroInput(e.target.value)          
          }}></input>
        
        </Col>
        <Col>
        </Col>

        <Col lg={1.5}>
        <Button variant="warning" onClick={()=>{busca('TODOS')}}> TOTAL: {counterTotal}</Button>
        </Col>
        <Col lg={1.5}>
        <Button variant="danger" onClick={()=>{busca('ERRO')}}> ERROS: {counterErro}</Button>
        </Col>
        <Col lg={1.5}>
        <Button variant="primary" onClick={()=>{busca('DEBUG')}}> DEBUGS : {counterDebug}</Button>
        </Col>
        <Col lg={1.5}>
        <Button variant="success" onClick={()=>{busca('INFO')}}> INFO: {counterInfo}</Button>
        </Col>
        <br></br>
        
        </Navbar>

        <br></br>

        <Row className= "justify-content-center">
        <Button
          className='mr-3 rounded-circle'
          variant="dark" 
          onClick={()=>{
          setGrafico("TOTAL")
        }
        }>Total</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("TIPO")
        }
        }>Por tipo</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("DEBUG")
        }
        }>DEBUG</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("ERROR")
        }
        }>ERROR</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("TRACE")
        }
        }>TRACE</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("INFO")
        }
        }>INFO</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("SUCCESS")
        }
        }>SUCCESS</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("WARN")
        }
        }>WARN</Button>

        <Button
          className='mr-3'
          variant="dark" 
          onClick={()=>{
          setGrafico("FATAL")
        }
        }>FATAL</Button>
        </Row>

        <p>{filtroInput}</p>

        {mostrarGrafico(grafico)}

        {/* <GraficoDebug></GraficoDebug> */}
    
        {/* <Grafico></Grafico>
    
        <GraficoTodos></GraficoTodos> */}
    


        <Table bordered hover table-sm>
        <thead >
          <tr>
            <th className='col-1'>Type</th>
            <th className='col-1'>Data </th>
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
                <td className='table-success' >{dado.type}</td>
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
