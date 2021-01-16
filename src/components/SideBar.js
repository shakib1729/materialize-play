import React from 'react';
import { Button, SideNav, SideNavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <SideNav
      id='SideNav-10'
      fixed={true}
      options={{
        draggable: true,
      }}
      // trigger={<Button node='button'>SIDE NAV DEMO</Button>}
      trigger={<Icon>menu</Icon>}
    >
      <SideNavItem
        user={{
          background: 'https://placeimg.com/640/480/tech',
          email: 'jdandturk@gmail.com',
          image: 'static/media/react-materialize-logo.824c6ea3.svg',
          name: 'John Doe',
        }}
        userView
      />

      <Link to={'/'}>
        <SideNavItem icon={<Icon>color_lens</Icon>}>Home</SideNavItem>
      </Link>

      <Link to={'/dropdownpage'}>
        <SideNavItem icon={<Icon>videogame_asset</Icon>}>
          DropDown Page
        </SideNavItem>
      </Link>

      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>

      <Link to={'/modalpage'}>
        <SideNavItem icon={<Icon>toys</Icon>}>Modal Page</SideNavItem>
      </Link>
    </SideNav>
  );
};

export default SideBar;
