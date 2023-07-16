import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../../Assets/Icons";

const HeaderRoot = styled.div`
  background: #ffffff;
  padding: 0 1.875rem;
  height: 6.125rem;
  display: flex;
  gap: 2.75rem;
  align-items: center;
`;

const LogoContainer = styled.a`
  display: flex;
  width: 4.5rem;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

interface IHeaderProps {
  link: string;
  logo?: string;
  alt?: string;
  children: React.ReactNode;
}

const Header: FC<IHeaderProps> = ({ link = "#", children, logo, alt }) => {
  return (
    <HeaderRoot>
      <LogoContainer href={link}>
        {logo ? (
          <Logo src={logo} alt={alt} />
        ) : (
          <Icon kind="logo" width={72} height={52} />
        )}
      </LogoContainer>
      {children}
    </HeaderRoot>
  );
};

export default Header;
