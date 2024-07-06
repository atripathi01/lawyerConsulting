import React from 'react';
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

type Inputs = {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
//   phone: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   country: string;
//   gender: string;
//   dob: string;
  type: string;
};

const typeOfUser=[
    {
        value: 'Client',
        label: 'Client'
    },
    {
        value: 'Lawyer',
        label: 'Lawyer'
    },
    {
        value: 'Admin',
        label: 'Admin'
    }
]


const Register = ({ handleClose,setIsNewUser,setUserData }: any) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();

      const setCookie = (name: string, value: string, days: number) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      };

      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setCookie('name', data.name, 7); // Save username for 7 days
        setCookie('email', data.email, 7); // Save email for 7 days
        setCookie('password', data.password, 7); // Save email for 7 days
        setCookie('type', data.type, 7); // Save email for 7 days
        setCookie('isUserLogin', 'true', 7); 
        setCookie('isProfileIncomplete', 'false', 7);
        setUserData({
            email:data.email,
            name:data.name,
            isUserLogin:true,
            type:data.type,
            isProfileIncomplete:false 
        })
        handleClose();
      };
  return (
    <div>
        <p className='text-3xl'>Register</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <FormLabel column sm='2'>
            Name
          </FormLabel>
          <Col sm='10'>
            <FormControl
              placeholder='John Smith'
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-red-700'>Name field is required</span>}
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
            {errors.email && <span className='text-red-700'>Email field is required</span>}
          </Col>
        </FormGroup>
        <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <FormLabel column sm='2'>
            Password
          </FormLabel>
          <Col sm='10'>
            <FormControl
              placeholder='***********'
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && <span className='text-red-700'>Password field is required</span>}
          </Col>
        </FormGroup>
        <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <FormLabel column sm='2'>
            Confirm Password
          </FormLabel>
          <Col sm='10'>
            <FormControl
              placeholder='***********'
              type='password'
              {...register('confirmpassword', { required: true })}
            />
            {errors.password && <span className='text-red-700'>Confrim Password field is required</span>}
          </Col>
        </FormGroup>
        <FormGroup as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <FormLabel column sm='2'>
            Type
          </FormLabel>
          <Col sm='10'>
          <FormSelect
            className='no-outline'
            style={{ }}
          >
            {typeOfUser.map((type, index) => (
              <option key={index} value={type?.value} {...register('type', { required: true })} >
                {type?.label}
              </option>
            ))}
          </FormSelect>
            {errors.password && <span className='text-red-700'>Type field is required</span>}
          </Col>
        </FormGroup>
        
        <button
          type='submit'
          className='px-2 py-1 bg-[#060c19] text-white rounded-none border-none cursor-pointer'
        >
          Register
        </button>
      </Form>
      <p className='mt-3'>Do you have account? <span className='text-purple-600 cursor-pointer' onClick={()=>setIsNewUser(false)}>Login</span></p>
    </div>
  )
}

export default Register