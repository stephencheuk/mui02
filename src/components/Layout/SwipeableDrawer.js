import React from 'react';
import Drawer from 'react-motion-drawer';

const SwipeableDrawer = ({ children, opt, ...props }) => {

  return (
        <Drawer className='Drawer' { ...opt }>
          { val => children(val, opt) }
        </Drawer>
  );

}

export default SwipeableDrawer;
