'use client';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Nav,
  NavDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarText,
  NavbarToggle,
  NavLink,
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import BasicModal from './model';
import { Typography } from '@mui/material';
import Register from './register';
import LoginComponent from './login';
import Image from 'next/image';
import Verified from '../image/verified.jpg';
import CompleteProfile from './completeProfile';

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [userData, setUserData] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openProfieComplpete, setOpenProfieComplpete] = useState(false);
  const getCookie = (name: string) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  const deleteAllCookies = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  };

  const onLogout = () => {
    deleteAllCookies(); // Delete specific user cookies
    setUserData({
      email: '',
      name: '',
      isUserLogin: false,
    });
  };

  const completeProfile = () => {
    if (userData) {
      return (
        <BasicModal
          handleClose={() => setOpenProfieComplpete(false)}
          handleOpen={() => setOpenProfieComplpete(true)}
          open={openProfieComplpete}
        >
          <CompleteProfile handleClose={() => setOpenProfieComplpete(false)} />
        </BasicModal>
      );
    }
  };

  const fetchUserData = () => {
    const name = getCookie('name');
    const email = getCookie('email');
    const isUserLogin = getCookie('isUserLogin');
    const type = getCookie('type');
    const isProfileIncomplete = getCookie('isProfileIncomplete');

    if (name && email) {
      console.log('name:', name);
      console.log('Email:', email);
      console.log('isUserLogin:', isUserLogin);
      console.log('isProfileIncomplete:', isProfileIncomplete);
      console.log('type', type);
      setUserData({
        name: name,
        email: email,
        isUserLogin: isUserLogin,
      });
      if (type === 'client') {
        // setIsNewUser(true);
      }
      if (isProfileIncomplete === 'false') {
        setOpenProfieComplpete(true);
      }
    } else {
      console.log('No data found in cookies');
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Navbar className='' style={{ borderBottom: '1px solid #00000045', position:'sticky', top:"0", zIndex:"999", backgroundColor:"#fff" }}>
      <Container>
        <NavbarBrand href='/' className='fw-bold text-dark fs-3'>
          Law Consulting
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className='justify-content-end'>
          <Nav className=''>
            <NavLink href='/findLawyer' className='fw-bold text-dark'>
              Find Lawyer
            </NavLink>
            <NavLink href='/videoConsult' className='fw-bold text-dark'>
              Video Consult
            </NavLink>
          </Nav>
        </NavbarCollapse>
        <NavbarCollapse className='justify-content-end'>
          {/* @ts-ignore */}
          {userData?.isUserLogin && (
            <Nav className='d-flex align-items-center'>
              <NavbarText className='mr-2 d-flex align-items-center text-success'>
                <span>
                  <Image src={Verified} alt={'verified'} width={20} />
                </span>
                Verified
              </NavbarText>
              <NavbarText className='d-flex align-items-center'>
                Signed in as:
                <NavDropdown
                  id='nav-dropdown-dark-example'
                  //   @ts-ignore
                  title={userData?.name || userData?.email || 'User'}
                >
                  <NavDropdown.Item href='#action/3.1'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Setting
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
                {/* <a href='#login'></a> */}
              </NavbarText>
            </Nav>
          )}
          {completeProfile()}
          {/* @ts-ignore */}
          {!userData?.isUserLogin && (
            <NavbarText className='cursor-pointer'>
              <div onClick={handleOpen}>Register/Login</div>
            </NavbarText>
          )}
          {/* @ts-ignore */}
          <BasicModal
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
          >
            {isNewUser ? (
              <Register
                setIsNewUser={setIsNewUser}
                handleClose={handleClose}
                setUserData={setUserData}
              />
            ) : (
              <LoginComponent
                setIsNewUser={setIsNewUser}
                handleClose={handleClose}
                setUserData={setUserData}
              />
            )}
          </BasicModal>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
