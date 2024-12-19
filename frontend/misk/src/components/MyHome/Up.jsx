import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/UP.jpg';
import img2 from '../../assets/UP2.jpg';
import img3 from '../../assets/UP3.jpg';
import './Up.css'


function Up() {
  return (
    <Carousel data-bs-theme="dark" className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption >
          <h5>Book an appointment</h5>
          <a className="btn btn-outline-primary" href="/booking">Booking</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>take a look at my work</h5>
          <a className="btn btn-outline-primary" href="/myworks">My works</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>About Me</h5>
          <a className="btn btn-outline-primary" href="/aboutme">About me</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}







export default Up;
