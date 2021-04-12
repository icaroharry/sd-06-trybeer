import React, { useContext, useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useHistory } from 'react-router';
import UserContext from '../context/UserContext';
import {
  TitleHeadingOne,
  DivHeaderCenter,
  DivHeaderLeft,
  DivHeaderContainer,
} from './styled-components';

function Header() {
  const { sidebar, setSidebar } = useContext(UserContext);
  const showSidebar = () => setSidebar(!sidebar);
  const [pathnameTitle, setPathnamerTitle] = useState('TryBeer');
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(() => {
    if (pathname === '/profile') {
      setPathnamerTitle('Meu perfil');
    }
    if (pathname === '/admin/profile') {
      setPathnamerTitle('Admin - Meu Perfil');
    }
    if (pathname === '/checkout') {
      setPathnamerTitle('Finalizar Pedido');
    }
    if (pathname === '/orders') {
      setPathnamerTitle('Meus Pedidos');
    }
  }, [pathname]);

  return (
    <DivHeaderContainer>
      <DivHeaderLeft>
        <FaIcons.FaBars
          className="menu-bars"
          data-testid="top-hamburguer"
          onClick={ showSidebar }
        />
      </DivHeaderLeft>
      <DivHeaderCenter>
        <TitleHeadingOne
          data-testid="top-title"
          className="top-title"
        >
          { pathnameTitle }
        </TitleHeadingOne>
      </DivHeaderCenter>
    </DivHeaderContainer>
  );
}

export default Header;
