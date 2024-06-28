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
import { SubmitHandler, useForm } from 'react-hook-form';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 500,
  maxWidth: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '15px',
  p: 4,
  '@media (max-width: 400px)': {
    width: 300,
    padding: '16px',
  },
};
type Inputs = {
  email: string;
  message: string;
  name: string;
};
const TypeOfService = () => {
  const [open, setOpen] = useState(false);
  const [consulting, setConsulting] = useState<string>('');

  const handleOpen = (type: string) => {
    setOpen(true);
    setConsulting(type);
  };
  const handleClose = () => setOpen(false);

  const lawyersArray = [
    {
      id: 1,
      type: 'Criminal Lawyer',
      image: '',
    },
    {
      id: 2,
      type: 'Corporate Lawyer',
      image: '',
    },
    {
      id: 3,
      type: 'Family Lawyer',
      image: '',
    },
    {
      id: 4,
      type: 'Real Estate Lawyer',
      image: '',
    },
    {
      id: 5,
      type: 'Tax Lawyer',
      image: '',
    },
    {
      id: 6,
      type: 'Intellectual Property Lawyer',
      image: '',
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    handleClose();
  };

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
          <button className='py-1 px-2 bg-black cursor-pointer text-lg  text-white  '>
            View all lawyers
          </button>
        </Grid>
        <Grid
          item
          xs={12}
          className='flex justify-start items-start flex-wrap my-8'
        >
          {lawyersArray?.map((type) => (
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
                onClick={() => handleOpen(type?.type)}
              >
                {' '}
                Consult Now
              </p>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h1 id='modal-modal-title' className='text-3xl font-bold'>
            {consulting} Consultation
          </h1>
          <p id='modal-modal-description' className='text-lg'>
            Please fill your information and problem, we will contact you as
            soon as possible
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
              <FormLabel column sm='2'>
                Name
              </FormLabel>
              <Col sm='10'>
                <FormControl
                  placeholder='John Smith'
                  plaintext
                  {...register('name', { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </Col>
            </FormGroup>
            <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
              <FormLabel column sm='2'>
                Email
              </FormLabel>
              <Col sm='10'>
                <FormControl
                  placeholder='email@example.com'
                  type='email'
                  {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </Col>
            </FormGroup>
            <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
              <FormLabel column sm='2'>
                Message
              </FormLabel>
              <Col sm='10'>
                <FormControl
                  placeholder='enter details'
                  plaintext
                  {...register('message', { required: true })}
                />
                {errors.message && <span>This field is required</span>}
              </Col>
            </FormGroup>
            <button
              type='submit'
              className='px-2 py-1 bg-[#060c19] text-lg text-white rounded-none border-none cursor-pointer'
            >
              Send
            </button>
          </Form>
        </Box>
      </Modal>
    </Container>
  );
};

export default TypeOfService;
