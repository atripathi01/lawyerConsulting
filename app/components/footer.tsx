import { Container, Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[40vh] h-fit bg-[#060c19] text-white'>
        <Container className='p-2'>
        <Grid container spacing={4} className='flex justify-between items-center mt-6 flex-wrap' >
            <Grid item xs={12} md={3}>
                <h3 className='font-bold text-xl'>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3 className='font-bold text-xl'>Services</h3>
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3 className='font-bold text-xl'>Consultings</h3>
                <ul>
                    <li>Criminal Consulting</li>
                    <li>Tax Consulting</li>
                    <li>Property Consulting</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3 className='font-bold text-xl'>Contact Us</h3>
                <p>Email: 123@example.com</p>
                <p>Phone: 123-456-7890</p>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Footer