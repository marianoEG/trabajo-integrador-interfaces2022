import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'
import CardAlbum from './CardAlbum';

const Album = ({album, borrarImg}) => {
  return (
    <>
        <Container fluid className='album'>
            <Row>
                <Col className='titulo-album'>
                    <h1>Mi album</h1>
                </Col>
            </Row>
            <Row>
                <Col className='albumImg'>
                    {album.map(url => (
                        <CardAlbum
                            url = {url}
                            key = {url.id}
                            borrarImg = {borrarImg}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Album