import React from 'react';

const DrawerContext = React.createContext({drawerIsOpen: false, openDrawer: () => {}, closeDrawer: () => {} });
export default DrawerContext;