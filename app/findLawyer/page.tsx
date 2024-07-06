'use client';
import { Container } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import HerBG from '../image/findfLawyer.png';
import { Col, FormSelect, Row } from 'react-bootstrap';
import locationList from '../json/location.json';
import lawyerList from '../json/lawyer.json';

const FindLawyer = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = locationList?.locations || [];
  const lawyerTypes = lawyerList?.lawyer || [];
  return (
    <div>
      <div className='bg-[#060c19]'>
        <Container>
          <Row className='h-[65vh] relative overflow-hidden'>
            <Col
              sm={12}
              className='text-white flex justify-center items-start  flex-col'
            >
              <p className='text-[50px] font-bold mb-0'>
                Don&#39;t need to go anywhere!
              </p>
              <p className='text-[50px] font-bold mt-0'>
                Find your lawyer, Here only
              </p>
              <div className='d-flex justify-start items-center flex-row z-30'>
                <FormSelect
                  className='my-4 mx-1 text-white rounded-0 bg-transparent no-outlinen'
                  style={{ width: '300px' }}
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </FormSelect>
                <FormSelect
                  className='my-4 mx-1 text-white rounded-0 bg-transparent no-outline'
                  style={{ width: '300px' }}
                >
                  {lawyerTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </FormSelect>
              </div>
            </Col>
            <div className='absolute  bottom-0 flex justify-end items-end'>
              <Image src={HerBG} alt='hero' width={750} />
            </div>
          </Row>
        </Container>
      </div>
      <Container>Hello!</Container>
    </div>
  );
};

export default FindLawyer;
