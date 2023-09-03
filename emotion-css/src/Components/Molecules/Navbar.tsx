import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import InputSearch from "../../Components/Atoms/InputSearch";
import Breadcrumb from "../../Components/Atoms/Breadcrumb";
import Logo from "../../Assets/svgs/logo";

interface NavbarProps {
  options?: string[];
  showInput?: boolean;
  showBreadcrumb?: boolean;
}

const header = css`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 0.5rem;
`;

const headerLeft = css`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const StyledHeader = styled.div`
  ${header}
`;

const StyledHeaderLeft = styled.div`
  ${headerLeft}
`;

const Navbar = ({
  options,
  showInput = false,
  showBreadcrumb = true,
}: NavbarProps) => {
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <Logo />
        {showBreadcrumb && <Breadcrumb lists={options} />}
      </StyledHeaderLeft>
      {showInput && <InputSearch isSearchIcon />}
    </StyledHeader>
  );
};

export default Navbar;
