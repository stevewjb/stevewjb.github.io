import Form from 'react-bootstrap/Form';

const Checkout = () => {
  return (
    <div className="container-lg">
      <div className="text-center">
        <h2 className="display-4">Checkout</h2>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-md-4">
          <Form>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" className="mb-3" />
            <Form.Label>Date of Birth:</Form.Label>
            <Form.Control type="text" className="mb-3" />
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" className="mb-3" />
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="text" className="mb-3" />
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" className="mb-3" />
            <Form.Label>Credit/Debit Card:</Form.Label>
            <Form.Control type="text" className="mb-3" />
            <Form.Label>Expiry Date:</Form.Label>
            <Form.Control type="text" className="mb-3" />
            <Form.Label>CVV:</Form.Label>
            <Form.Control type="text" className="mb-3" />

            <div className="my-4 text-center">
              <a className="btn btn-secondary">Checkout</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
   );
}
 
export default Checkout;
