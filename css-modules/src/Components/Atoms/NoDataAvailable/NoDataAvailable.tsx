import React from "react";
import Icon from "../../Icons/Icons";
import Heading from "../Heading/Heading";
import styles from "./NoDataAvailable.module.css";

const NoDataAvailable = () => {
  return (
    <div className={styles.noDataAvailable}>
      <Icon kind="info" className={styles.noDataIcon} />
      <Heading label="Sorry, we couldn't find any results" variant="h5" />
    </div>
  );
};

export default NoDataAvailable;
