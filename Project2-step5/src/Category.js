import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import zelda from './assets/zelda.jpg'
import poke from './assets/pokemon.jpg'
import fifa from './assets/fifa.jpg'
import re4 from './assets/re4.jpg'
import acm from './assets/acm.webp'
import spider from './assets/spiderman-preorder.jpg'
import ff16 from './assets/ff16.jpg'
import elden from './assets/elden.jpg'

const Category = () => {
  return (
    <Container fluid="lg">
      <div className="text-center">
        <h2 className="display-4">Our Games</h2>
      </div>
      <Breadcrumb className="mx-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {/* <Breadcrumb.Item href="#">
          Library
        </Breadcrumb.Item> */}
        <Breadcrumb.Item active>Games</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mt-5 mx-4">
        <Col xs={2}>
          <h4>Status</h4>
          {/* <Form.Label>Status:</Form.Label> */}
          <div key="default-radio" className="mb-5">
            <Form.Check type="checkbox" label="New" id="default-checkbox"/>
            <Form.Check type="checkbox" label="Used" id="default-checkbox2"/>
          </div>

          <h4>Publisher</h4>
          <div key="default-radio" className="mb-5">
            <Form.Check type="checkbox" label="PlayStation" id="default-checkbox3"/>
            <Form.Check type="checkbox" label="Xbox" id="default-checkbox4"/>
            <Form.Check type="checkbox" label="Nintendo" id="default-checkbox5"/>
            <Form.Check type="checkbox" label="Capcom" id="default-checkbox6"/>
          </div>

          <h4>Rating</h4>
          <div key="default-radio" className="mb-5">
            <Form.Check type="checkbox" label="5 Stars" id="default-checkbox7"/>
            <Form.Check type="checkbox" label="4 Stars & Up" id="default-checkbox8"/>
            <Form.Check type="checkbox" label="3 Stars & Up" id="default-checkbox9"/>
          </div>
        </Col>

        <Col>
          <Card style={{height: '380px'}}>
            <Card.Img variant="top" src={zelda} height="250"/>
            <Card.Body>
              <Card.Title>$89.99</Card.Title>
              <Card.Text>Legend of Zelda: Tears of the Kingdom</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: '380px'}} className="mt-5">
            <Card.Img variant="top" src={fifa} height="250"/>
            <Card.Body>
              <Card.Title>$49.99</Card.Title>
              <Card.Text>FIFA 23</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{height: '380px'}}>
            <Card.Img variant="top" src={poke} height="250"/>
            <Card.Body>
              <Card.Title>$79.99</Card.Title>
              <Card.Text>Pokémon Scarlet</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: '380px'}} className="mt-5">
            <Card.Img variant="top" src={re4} height="250"/>
            <Card.Body>
              <Card.Title>$79.99</Card.Title>
              <Card.Text>Resident Evil 4</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{height: '380px'}}>
            <Card.Img variant="top" src={acm} height="250"/>
            <Card.Body>
              <Card.Title>$69.99</Card.Title>
              <Card.Text>Assassin's Creed Mirage</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: '380px'}} className="mt-5">
            <Card.Img variant="top" src={spider} height="250"/>
            <Card.Body>
              <Card.Title>$89.99</Card.Title>
              <Card.Text>Spider-Man 2 Launch Edition</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{height: '380px'}}>
            <Card.Img variant="top" src={ff16} height="250"/>
            <Card.Body>
              <Card.Title>$89.99</Card.Title>
              <Card.Text>Final Fantasy XVI</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: '380px'}} className="mt-5">
            <Card.Img variant="top" src={elden} height="250"/>
            <Card.Body>
              <Card.Title>$79.99</Card.Title>
              <Card.Text>Elden Ring</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}
 
export default Category;
