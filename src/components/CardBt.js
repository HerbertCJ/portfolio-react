import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";

function CardBt({ title, text, url, image }) {
  return (
    <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },        
      }}>
      <Card style={{ width: '18rem', height: '30rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className='card-body'>
          <Card.Title><h3>{title}</h3></Card.Title>
          <Card.Text>
            <span className='card-text'>{text}</span>
          </Card.Text>
          <Button variant="primary" className='btn-card'>
            <a href={url} target='_blank' rel='noreferrer' className='link-website'>Visit Website </a>
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CardBt;