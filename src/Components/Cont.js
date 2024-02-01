import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import side from './gu (4).jpg';
import sid from './gu (5).jpg';

const Cont = () => {
  return (
    <><br></br>
     <h2 className='text-center text-danger fw-bold '> ---     OUR SERVICES     ---</h2><br></br>
        
    <Container className='align-item-center'>
   
      
      <Row >
      
        <Col ><img  src={side} style={{height:'350px',width:'280px'}} className='rounded-circle ms-5'></img></Col>
        <Col ><h3 className='text-center text-danger fw-bold lead'>SPECIALITY</h3>
        <p style={{height:'340px',overflow:'hidden'}}>connecting to a network, such as the internet or a local area network , using communication teca netw are technologies. These use wireless connecta netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling ions to transmit and receive data, enabling hnologies. These use wireless connections to transmit and receive data, enabling them to interact with other devices, access online resources, and perform various functions without the need for physic connection</p></Col>
      </Row>
    
      
      
      <Row >
      
        <Col ><img src={sid} style={{height:'350px',width:'280px'}} className='rounded-circle ms-5'></img></Col>
        <Col ><h3 className='text-center text-danger fw-bold lead'>OFFERS</h3>
        <p>connecting to a netw are technologies. These use wireless connections to transmit and receive data, enabling them to interact with other devices, access online resources, and perform various functions without the need for physic connection</p></Col>
      </Row>
    
    </Container>
    </>
   
  )
}

export default Cont