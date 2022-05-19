import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Nav, NavContainer, Logo, NavIcon, MobileIcon, NavMenu, Item, Links } from './styles';

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prevClick) => !prevClick);

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <NavIcon />
            ALPHA
          </Logo>
          <MobileIcon onClick={handleClick}>
            {click ? <CloseIcon /> : <MenuIcon />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <Item>
              <Links to="/">
                Home
              </Links>
            </Item>
            <Item>
              <Links to="card" smooth={true} duration={1000}>
                Products
              </Links>
            </Item>
            <Item>
              <Links to="/">
                Footer
              </Links>
            </Item>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar