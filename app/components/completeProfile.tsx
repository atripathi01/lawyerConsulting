import React, { useState } from 'react';
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import Ava from '../image/ava.jpg';
import Image from 'next/image';

type Inputs = {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  gender: string;
  dob: string;
  officeAddress: string;
  experience: string;
  type: string;
};
const genderList = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];
const CompleteProfile = ({ handleClose }: any) => {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState();
    function handleChange(e:any) {
        console.log(e.target.files);
        //@ts-ignore
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setCookie('isProfileIncomplete', 'true', 7);
    setUserData({
      isProfileIncomplete: true,
    });
    handleClose();
  };
  return (
    <div className='h-[75vh] overflow-y-scroll overflow-x-hidden'>
      <p className='text-3xl'>Complete Profile</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='mb-3 items-center'>
          <Col sm='2'>
            <Image src={file || Ava} alt='avatar' width={100} height={100} />
          </Col>
          <Col sm='10'>
            <FormControl type='file' onChange={handleChange} required />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm='6'>
            <FormLabel>Phone</FormLabel>
            <FormControl
              type='text'
              placeholder='Phone'
              {...register('phone', { required: true })}
            />
            {errors.phone && <p className='text-red-700'>Phone is required</p>}
          </Col>
          <Col sm='6'>
            <FormLabel>City</FormLabel>
            <FormControl
              type='text'
              placeholder='City'
              {...register('city', { required: true })}
            />
            {errors.city && <p className='text-red-700'>City is required</p>}
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm='6'>
            <FormLabel>State</FormLabel>
            <FormControl
              type='text'
              placeholder='State'
              {...register('state', { required: true })}
            />
            {errors.state && <p className='text-red-700'>State is required</p>}
          </Col>
          <Col sm='6'>
            <FormLabel>Country</FormLabel>
            <FormControl
              type='text'
              placeholder='Country'
              {...register('country', { required: true })}
            />
            {errors.country && (
              <p className='text-red-700'>Country is required</p>
            )}
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm='6'>
            <FormLabel>Postal Code</FormLabel>
            <FormControl
              type='text'
              placeholder='Postal Code'
              {...register('postalCode', { required: true })}
            />
            {errors.postalCode && (
              <p className='text-red-700'>Postal Code is required</p>
            )}
          </Col>
          <Col sm='6'>
            <FormLabel>DOB</FormLabel>
            <FormControl
              type='date'
              placeholder='DOB'
              {...register('dob', { required: true })}
            />
            {errors.dob && <p className='text-red-700'>DOB is required</p>}
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm='6'>
            <FormLabel>Gender</FormLabel>
            <FormSelect className='no-outline' style={{}}>
              {genderList.map((gender, index) => (
                <option
                  key={index}
                  value={gender?.value}
                  {...register('type', { required: true })}
                >
                  {gender?.label}
                </option>
              ))}
            </FormSelect>
            {errors.password && <span>This field is required</span>}
          </Col>
          <Col sm='6'>
            <FormLabel>Experience</FormLabel>
            <FormControl
              type='text'
              placeholder='Experience'
              {...register('experience', { required: true })}
            />
            {errors.experience && (
              <p className='text-red-700'>Experience is required</p>
            )}
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm='12'>
            <FormLabel>Address</FormLabel>
            <FormControl
              type='text'
              placeholder='Address'
              {...register('address', { required: true })}
            />
            {errors.address && (
              <p className='text-red-700'>Address is required</p>
            )}
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col sm='12'>
            <FormLabel>Office Address</FormLabel>
            <FormControl
              type='text'
              placeholder='Office Address'
              {...register('officeAddress', { required: true })}
            />
            {errors.officeAddress && (
              <p className='text-red-700'>Office Address is required</p>
            )}
          </Col>
        </Row>
        <button
          type='submit'
          className='px-2 py-1 bg-[#060c19] text-white rounded-none border-none cursor-pointer'
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default CompleteProfile;
