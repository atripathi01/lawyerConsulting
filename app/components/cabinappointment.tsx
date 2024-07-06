import { Box, Container, Grid, Modal } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import lawOrder from '../image/laworderr.svg';
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
import lawyerList from '../json/lawyer.json'

export const Cabinappointment = () => {

    const lawyersArray = lawyerList?.lawyer;
  return (
    <Container className='my-6'>
    <Grid container>
      <Grid item xs={12} className='flex justify-between items-start'>
        <div>
          <p className='text-2xl font-bold mb-2'>
            Consult top lawyer online for any type of case or anytime
          </p>
          <p className='text-gray-500'>
            Online consultations with verified lawyers in all experienced
          </p>
        </div>
        <button className='py-1 px-2 bg-[#060c19] cursor-pointer text-lg  text-white  '>
          View all lawyers
        </button>
      </Grid>
      <Grid
        item
        xs={12}
        className='flex justify-start items-start flex-wrap my-8'
      >
        {/* {lawyersArray?.map((type) => (
          <Grid
            key={type?.id}
            item
            xs={12}
            lg={2}
            className='flex justify-center items-center flex-col gap-2 cursor-pointer'
          >
            <div className='w-[150px] h-[150px] rounded-[50%] overflow-hidden'>
              <Image src={lawOrder} alt='law' width={150} height={150} />
            </div>
            <p className='text-xl font-bold text-center'>{type?.type}</p>
            <p
              className='cursor-pointer text-sky-500 text-text-capitalize hover:font-bold text-lg'
            >
              {' '}
              Consult Now
            </p>
          </Grid>
        ))} */}
      </Grid>
    </Grid>
  </Container>
  )
}
