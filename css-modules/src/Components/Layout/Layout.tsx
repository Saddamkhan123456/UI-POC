import React from "react";
import styles from "./Layout.module.css";
import Header from "../Molecules/Header/Header";
import Container from "./Container/Container";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <Header isBreadcrumb={true} isSearch={true} />
      <div className={styles.mainContainer}>
        <Container className={className}>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
