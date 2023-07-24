import map from './assets/Google_Maps_Logo_2020.svg.png'

const About = () => {
  return ( 
    <div className="container-lg">
      <div className="text-center">
        <h2 className="display-4">Contact Us</h2>
      </div>
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-4">
          
          <h4 className="display-6"><i className="bi bi-geo-alt"></i> Address:</h4>
          <p className="lead mt-3 mb-5">10000 Riverside St.<br />Ottawa, Ontario <br />A1A 1B1</p>
          <h4 className="display-6"><i className="bi bi-telephone"></i> Telephone:</h4>
          <p className="lead mt-3 mb-5 text-decoration-underline text-danger">1-613-777-8888</p>
          <h4 className="display-6"><i className="bi bi-clock"></i> Business Hours:</h4>
          <p className="lead mt-3">Mon-Fri: &nbsp;&nbsp;&nbsp; 09:00AM - 08:00PM <br />
            Sat-Sun: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:00AM - 08:00PM</p>
        </div>
        <div className="col-4 text-center d-none d-md-block">
          <img src={map} className="img-fluid" alt="map"/>
        </div>
      </div>
    </div>
  );
}
 
export default About;
