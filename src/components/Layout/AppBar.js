import React from 'react';

import './AppBar.css';

const AppBar = ({ children }) => {

  const elm = children();

  return (
      <div className='Appbar'>
        {
          (elm['menu'] || elm['logo']) &&
          <div className="AppbarMenu">
            { elm['menu'] && <div className="Menu"> { elm['menu'] } </div> }
            { elm['logo'] && <div className="Logo"> { elm['logo'] } </div> }
          </div>
        }
        {
          (elm['title'] || elm['search']) &&
          <div className="AppbarTitle">
            { elm['title'] }
          </div>
        }
        {
          elm['right'] && 
          <div className="AppbarRight">
            { elm['right'] }
          </div>
        }
      </div>
  );
}

export default AppBar;
