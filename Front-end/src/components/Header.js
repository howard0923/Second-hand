import React, { useState, useRef} from 'react';
import { useOnClickOutside } from '../commons/hook';
import { Link, withRouter } from 'react-router-dom';
import Burger from './Burger/Burger';
import SideMenu from 'components/Menu/Menu';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';

const Header = props => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));



  
  return (
    <div className="header">

      <div className="grid">
        <div className="home">
          <Link to="/">Home</Link>
        </div>
        <ThemeProvider theme={Theme}>
          <div className="burger" ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <SideMenu open={open} setOpen={setOpen}/>
          </div>
        </ThemeProvider>
        <div className="member">
          
          {props.user.nickname ? (
            <span className="nickname">
              <Link to="/member">
              <i className="far fa-user"></i>
              {props.user.nickname}
              </Link>
            </span>
          ) : (
            // <React.Fragment></React.Fragment> 可以使用简写 <></>
            <React.Fragment>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);