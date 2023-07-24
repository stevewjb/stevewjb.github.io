import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Services = () => {
  return ( 
    <div className="container-lg">
      <div className="text-center">
        <h2 className="display-4">Trade-In Program 
          <span>
            <Button variant="outline-secondary" href="/servicesch">Chinese</Button>
          </span>
        </h2>
        
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-md-4">
          <Form>
            <Form.Label>Select your platform:</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
              {/* <option>Make your selection</option> */}
              <option value="xbox">Xbox</option>
              <option value="ps">PlayStation</option>
              <option value="switch">Nintendo Switch</option>
            </Form.Select>

            <Form.Label>Select your game title:</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
              {/* <option>Make your selection</option> */}
              <option value="zelda">The Legend of Zelda: Tears of the Kingdom</option>
              <option value="ffxvi">Final Fantasy XVI</option>
              <option value="re4">Resident Evil 4</option>
              <option value="acm">Assassin's Creed Mirage</option>
              <option value="spider">Spider-Man 2 Launch Edition</option>
              <option value="pokemon">Pokémon Scarlet</option>
              <option value="fifa">FIFA 23</option>
              <option value="ring">Elden Ring</option>
            </Form.Select>

            <Form.Label>Game Condition:</Form.Label>
            <div key="default-radio" className="mb-3">
              <Form.Check inline type="radio" label="Complete" name="group1" id="default-checkbox"/>
              <Form.Check inline type="radio" label="Incomplete" name="group1" id="default-checkbox2"/>
            </div>

            <div className="my-4 text-center">
              <a className="btn btn-secondary">Submit</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
   );
}
 
export default Services;
