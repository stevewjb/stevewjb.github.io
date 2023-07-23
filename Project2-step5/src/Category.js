import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Category = () => {
  return (
    <Form>
      <div key="default-checkbox" className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
          id="default-checkbox"
          label="default-checkbox"
        />

        <Form.Check
          disabled
          type="checkbox"
          label="disabled-checkbox"
          id="disabled-default-checkbox"
        />
      </div>
    </Form>
  );
}
 
export default Category;
