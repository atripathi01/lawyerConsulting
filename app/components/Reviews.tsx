import { Container } from '@mui/material';
import { CarouselCaption, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
  return (
    <Container>
      <Carousel>
        <CarouselItem>
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <CarouselCaption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <CarouselCaption className='text-black'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    </Container>
  );
}

export default Reviews;
