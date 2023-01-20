import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBt({title, text, url, image}) {
  console.log(image);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary"><a href={url} target='_blank' rel='noreferrer' className='link-website'>Visit Website</a></Button>
      </Card.Body>
    </Card>
  );
}

export default CardBt;