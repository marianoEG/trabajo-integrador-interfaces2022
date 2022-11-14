import React from 'react'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { v4 as uuid } from "uuid";

const Principal = ({consultarApi, url, album, setAlbum}) => {

  const agregarImagen = () => { 
    if (album.filter(item => item.img === url.img).length > 0){
        alert("Ya tenes esta foto")
    } else{
        url.id = uuid()
        setAlbum([...album, url])
        console.log(album)
    }
     
   }

   const {img} = url

  return (
    <>
        <Container fluid>
        <Row className='principal'>
        <Col className='principal-izq'>
            <h1>Arma </h1>
            <br />
            <h1>tu album de </h1>
            <br />
            <h1>perritos</h1>
        </Col>
        <Col className='principal-der'>
            <Card className='cardP' style={{ width: '374px' }}>
                <Card.Img className='cardPImg' variant="top" src={img} />
                <Card.Body className='cardBody'>
                    <Button variant="primary" className='boton' onClick={consultarApi}>Dame otra foto</Button>
                    <Button variant="primary" className='boton' onClick={agregarImagen}>Añadir al album</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
        </Container>
    </>
  )
}

export default Principal