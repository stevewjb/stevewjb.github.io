import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainImg from './assets/zelda.jpg'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="my-5 mx-5">
          <h1>
            <div class="display-2">Welcome</div>
            <div class="display-5 text-muted">to Game Continue</div>
          </h1>
          <p class="lead my-4">
          We are dedicated to bringing you the latest and greatest in gaming entertainment. 
          Whether you're a seasoned gamer seeking epic adventures or a casual player looking for fun-filled escapes, 
          we have something for everyone. <br/><br/>Explore an extensive collection of top-tier titles across all major 
          platforms, from Xbox, PlayStation and Nintendo Switch.</p>
          <a href="/category" class="btn btn-secondary btn-lg">Shopping Now</a>
        </div>
        </Col>
        <Col>
        <div className="my-5 mx-5">
          <img src={mainImg} class="img-fluid" alt="main image with a Legend of Zelda game art" />
        </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Home;
