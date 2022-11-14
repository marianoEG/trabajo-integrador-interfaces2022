import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardAlbum = ({url, borrarImg}) => {
  return (
    <>
        <Card className='cardP' style={{ width: '200px' }}>
            <Card.Img className='cardAImg' variant="top" src={url.img} />
            <Card.Body className='cardBody'>
                <Button 
                    variant="primary" 
                    className='boton' 
                    onClick={()=>borrarImg(url.id)}>Eliminar imagen</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default CardAlbum