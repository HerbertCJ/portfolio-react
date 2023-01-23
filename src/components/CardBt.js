import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBt({title, text, url, image}) {  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='card-body'>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Text>
          <span className='card-text'>{text}</span>
        </Card.Text>
        <Button variant="primary" className='btn-card'>
          <a href={url} target='_blank' rel='noreferrer' className='link-website'>Visit Website </a>
          </Button>
      </Card.Body>
    </Card>
  );
}

export default CardBt;