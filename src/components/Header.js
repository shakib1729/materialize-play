import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import SideBar from './SideBar';

const Header = () => {
  return (
    <Navbar
      alignLinks='right'
      brand={
        <a className='brand-logo' href='#'>
          Logo
        </a>
      }
      id='mobile-nav'
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      centerLogo
      sidenav={SideBar}
    ></Navbar>
  );
};

export default Header;
