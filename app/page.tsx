'use client';
import React, { Suspense, useState, useEffect } from 'react';
import { FormSelect } from 'react-bootstrap';
import { Container } from '@mui/material';
import Loading from './components/loading';
import Reviews from './components/Reviews';
import lawyerList from './json/lawyer.json';
import locationList from './json/location.json';
import axios from 'axios'
import cities from 'cities.json';
import Footer from './components/footer';
const ServiceCard = React.lazy(()=>import('./components/serviceCard'));
const TypeOfService = React.lazy(()=>import('./components/typeOfService'));



export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = locationList?.locations || [];
  const lawyerTypes = lawyerList?.lawyer || [];
  const CityOfInd= cities.filter(c=>c.country ==='IN');
  
  const handleChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };
  useEffect(() => {
    // Your API call or data fetching logic goes here
    // setSelectedLocation(selectedLocation); // Uncomment this line if you want to fetch data from API
    // For now, it's just setting the state for demonstration purposes
    axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=5666961681f74654b6a6fa082c066a61').then((res)=>{
        setSelectedLocation(res?.data?.city); // Uncomment this line if you want to fetch data from API
    }).catch((err)=>{console.log(err)});
  }, [])
  

  return (
    <div>
      <Container>
        <div className='d-flex justify-start items-center flex-row'>
          <FormSelect
            className='my-7 mx-1 no-outline'
            style={{ width: '400px' }}
          >
            {CityOfInd.map((location, index) => (
              <option key={index} value={location?.name}>
                {location?.name}
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
 
    </div>
  );
}
