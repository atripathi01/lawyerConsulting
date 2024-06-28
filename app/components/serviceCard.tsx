import Image from 'next/image';
import React from 'react';
import VideoCall from '../image/consult.jpg';
import FindNear from '../image/find.jpg';
import { Container } from '@mui/material';

const ServiceCard = () => {
  return (
    <Container>
      <div className='flex justify-center items-center flex-row my-6'>
        <div className='card_box m-3 w-[250px] h-[350px] rounded-3xl shadow-md overflow-hidden relative'>
          <div className='flex justify-center items-center overflow-hidden h-[350px]'>
            <Image src={VideoCall} alt='vedioConslting' width={250} />
          </div>
          <div className='absolute bottom-0 w-full h-fit bg-white p-3 z-10'>
            <h1 className='text-center text-lg font-bold'>
              Instant Video Consulting
            </h1>
            <p className='text-center text-gray-500'>Connect within 60sec</p>
          </div>
        </div>
        <div className='card_box m-3 w-[250px] h-[350px] rounded-3xl shadow-md overflow-hidden relative'>
          <div className='flex justify-center items-center overflow-hidden h-[350px]'>
            <Image src={FindNear} alt='vedioConslting' width={250} />
          </div>
          <div className='absolute bottom-0 w-full h-fit bg-white p-3 z-10'>
            <h1 className='text-center text-lg font-bold'>
              Find Lawyers Near You
            </h1>
            <p className='text-center text-gray-500'>Confirmed appointments</p>
          </div>
        </div>
        <div className='card_box m-3 w-[250px] h-[350px] rounded-3xl shadow-md overflow-hidden relative'>
          <div className='flex justify-center items-center overflow-hidden h-[350px]'>
            <Image src={VideoCall} alt='vedioConslting' width={250} />
          </div>
          <div className='absolute bottom-0 w-full h-fit bg-white p-3 z-10'>
            <h1 className='text-center text-lg font-bold'>
              Instant Video Consulting
            </h1>
            <p className='text-center text-gray-500'>Connect within 60sec</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceCard;
