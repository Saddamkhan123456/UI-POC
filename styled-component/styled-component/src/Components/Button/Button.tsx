import React from 'react';
import styled from 'styled-components';

interface IButton {
  variant?: 'primary' | 'secondary' | 'danger' | any;
  onClick?: () => void;
  label: React.ReactNode;
}

// Define the base button styles
const ButtonBase = styled.button`
  /* Common styles for all variants */
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  /* Variant-specific styles */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #007bff;
          color: #ffffff;
        `;
      case 'secondary':
        return `
          background-color: #6c757d;
          color: #ffffff;
        `;
      case 'danger':
        return `
          background-color: #dc3545;
          color: #ffffff;
        `;
      default:
        return `
          background-color: #f8f9fa;
          color: #212529;
        `;
    }
  }}
`;

const Button = ({ variant, onClick, label, ...props }: IButton) => {
  return (
    <ButtonBase variant={variant} onClick={onClick} {...props}>
      {label}
    </ButtonBase>
  );
};

export default Button;
