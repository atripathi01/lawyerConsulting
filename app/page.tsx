'use client';
import React, { Suspense, useState } from 'react';
import { FormSelect } from 'react-bootstrap';
import { Container } from '@mui/material';
import Loading from './components/loading';
import Reviews from './components/Reviews';
import lawyerList from './json/lawyer.json';
import locationList from './json/location.json';
import Footer from './components/footer';
const ServiceCard = React.lazy(()=>import('./components/serviceCard'));
const TypeOfService = React.lazy(()=>import('./components/typeOfService'));


export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = locationList?.locations || [];
  const lawyerTypes = lawyerList?.lawyer || [];


  const handleChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <Container>
        <div className='d-flex justify-start items-center flex-row'>
          <FormSelect
            className='my-7 mx-1 no-outline'
            style={{ width: '400px' }}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </FormSelect>
          <FormSelect
            className='my-7 mx-1 no-outline'
            style={{ width: '400px' }}
          >
            {lawyerTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </FormSelect>
        </div>
      </Container>

        <Suspense fallback={<Loading />}>
        <ServiceCard />
        </Suspense>

      <div className='my-16'>
        <TypeOfService />
      </div>
      {/* <Reviews /> */}
      <Footer />
    </div>
  );
}
