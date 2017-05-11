import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navbar = ({ currency }) => (
  <AppBar
    title={currency}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Navbar;
