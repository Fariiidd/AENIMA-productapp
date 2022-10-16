import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

import AdbIcon from '@material-ui/icons/Adb';

export const Nav = styled.div`
    background: #EDEDED;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    ${Container}
`;

export const Logo = styled(Link)`
    color: #171717;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

    &:hover {
        color: #444444;
    }
`;

export const NavIcon = styled(AdbIcon)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;
    color: #171717;

    @media screen and (max-width: 960px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;

      &:hover {
          color: #444444;
      }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        transition: all 0.5s ease;
        background: #444444;
    }
`;

export const Item = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #444444;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const Links = styled(Link)`
    color: #171717;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover {
        color: #444444;
    }

    @media screen and (max-width: 960px) {
        color: #EDEDED;
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #171717;
            transition: all 0.3s ease;
        }
    }
`; 
