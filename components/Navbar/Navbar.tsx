import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ExpandableSearch from './ExpandableSearch';
import HideOnScroll from './HideOnScroll';
import Logo from './Logo';
import UserMenu from './UserMenu';
import MenuOnHide from './MenuOnHide';
import MenuOnShow from './MenuOnShow';

export default function Navbar() {
  return (
    <>
      <Container>
        <Toolbar></Toolbar>
      </Container>
      <HideOnScroll>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo display={{ xs: 'none', md: 'flex' }} />
              <MenuOnHide/>
              <Logo display={{ xs: 'flex', md: 'none' }} />
              <MenuOnShow/>
              <ExpandableSearch />
              <UserMenu/>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
