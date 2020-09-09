import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavItems from './NavItems/NavItems';

const NavContainer = styled.nav`
  position: fixed;
  top: 68px;
  z-index: 1;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 8px 0 8px 8px;
  transition: all 150ms cubic-bezier(0.4,0.0,0.2,1);
  width: ${(props) => (props.isHover ? '280px' : '80px')};
  box-shadow ${(props) =>
    props.isHover &&
    '0 16px 10px 0 rgba(0, 0, 0, 0.14), 0 11px 18px 0 rgba(0, 0, 0, 0.12), 0 13px 5px -1px rgba(0, 0, 0, 0.2)'}
`;

function Nav({ isHover, onHover }) {
  return (
    <NavContainer
      isHover={isHover}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <NavItems isHover={isHover} />
    </NavContainer>
  );
}

NavContainer.propTypes = {
  isHover: PropTypes.bool,
  onHover: PropTypes.func,
};

export default React.memo(Nav);
