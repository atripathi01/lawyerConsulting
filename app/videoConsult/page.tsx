import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import HerBG from '../image/heroBg.png';
import { Col, Row } from 'react-bootstrap';

const VideoConsult = () => {
  return (
    <div>

    <div className='bg-[#060c19]'>
    <Container>
      <Row className='h-[65vh] relative overflow-hidden'>
        <Col sm={12} className='text-white flex justify-center items-start  flex-col'>
        <p className='text-[50px] font-bold mb-0'>Skip the Travel!</p>
        <p className='text-[50px] font-bold mt-0'>Take Online Lawyers Consulting</p>
        <p className='text-xl'>Private consulting + Audio/Video calls</p>
        <p className='text-xl'>we have 100+ online verified consults <span className='text-green-400 font-bold'>online available</span></p>
        {/* <div className='bg-white w-fit h-fit'> */}
        <button className='m-[1px] py-1 px-2 bg-transparent text-xl  text-white  rounded-none border-[#fff] border-solid border-[2px] cursor-pointer'>
          Book a Consultation
        </button>
        {/* </div> */}
        </Col>
        {/* <Col sm={6} className='flex justify-center items-end'> */}
        <div className='absolute  bottom-0 flex justify-end items-end'>
        <Image src={HerBG} alt='hero' width={750}  />
        </div>
        {/* </Col> */}
      </Row>
    </Container>
    </div>
    <Container>
        Heello
    </Container>
    </div>
  );
};

export default VideoConsult;
