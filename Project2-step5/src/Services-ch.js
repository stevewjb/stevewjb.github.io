import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ServicesCh = () => {
  return ( 
    <div className="container-lg">
      <div className="text-center">
        <h2 className="display-4">以旧换新
          <span>
            <Button variant="outline-secondary" href="/services">English</Button>
          </span>
        </h2>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-md-4">
          <Form>
            <Form.Label>选择您的平台：</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
              {/* <option>Make your selection</option> */}
              <option value="xbox">Xbox</option>
              <option value="ps">PlayStation</option>
              <option value="switch">Nintendo Switch</option>
            </Form.Select>

            <Form.Label>选择您的游戏名称：</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
              {/* <option>Make your selection</option> */}
              <option value="zelda">塞尔达传说：王国之泪</option>
              <option value="ffxvi">最终幻想16</option>
              <option value="re4">生化危机4</option>
              <option value="acm">刺客信条：幻景</option>
              <option value="spider">蜘蛛侠2</option>
              <option value="poke">宝可梦：朱</option>
              <option value="fifa">FIFA 23</option>
              <option value="ring">艾尔登法环</option>
            </Form.Select>

            <Form.Label>游戏情况：</Form.Label>
            <div key="default-radio" className="mb-3">
              <Form.Check inline type="radio" label="完整" name="group1" id="default-checkbox"/>
              <Form.Check inline type="radio" label="不完整" name="group1" id="default-checkbox2"/>
            </div>

            <div className="my-4 text-center">
              <a className="btn btn-secondary">提交</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
   );
}
 
export default ServicesCh;
